class SandwichesController < ApplicationController

    before_action :require_login

    def landing
    end

    def index
        if params[:user_id] && current_user.id == params[:user_id].to_i
          @user = current_user
          @sandwiches = @user.sandwiches.order(:sandwich_name) || 
          respond_to do |f|
            f.html {render :index}
            f.json {render json: @sandwiches}
          end
        elsif params[:user_id]
          flash[:alert] = "Leave my provolone! (You can't view another user's sandwiches)"
        else
          @sandwiches = Sandwich.all.order(:sandwich_name)
          respond_to do |f|
            f.html {render :index}
            f.json {render json: @sandwiches}
          end
        end
    end

    # def search      
    #     @sandwiches = Sandwich.all.select{ |sandwich| sandwich.sandwich_name.downcase.include?(params[:sandwich][:search].downcase)}
    #     render json: @sandwiches
    # end

    def new
        if params[:user_id] && current_user.id == params[:user_id].to_i
            @user = current_user
            @sandwich = Sandwich.new(user_id: params[:user_id])
            8.times {@sandwich.sandwich_fillings.build}
            if params[:layout] && params[:layout] == "false"
                render :new, layout: false
            else
                render :new
            end
        else
            flash[:alert] = "Leave my provolone! (You can't create a sandwich for another user)"
            redirect_to sandwiches_path
      end
    end

    def create
        @sandwich = Sandwich.new(sandwich_params)
        @user = User.find_by(id: params[:user_id])
        if @sandwich.save
            render json: @sandwich, status: 201
        else
            render json: @sandwich, status: 406
        end
    end

    def show
        @sandwich = Sandwich.find_by(id: params[:id])
        respond_to do |f|
          f.html {render :show}
          f.json {render json: @sandwich}
        end
    end

    def edit
        @sandwich = Sandwich.find_by(id: params[:id])
        @user = current_user
        if !@sandwich
            flash[:alert] = "Sorry, sandwich not found"
            redirect_to user_sandwiches_path
        end 
        4.times {@sandwich.sandwich_fillings.build}
    end

    def cheese
        @sandwiches = Sandwich.cheese
    end
    
    def grilled
        @sandwiches = Sandwich.grilled
    end

    def open_faced
        @sandwiches = Sandwich.open_faced
    end

    def peanut_butter
        @sandwiches = Sandwich.peanut_butter
    end

    def update
        @sandwich = Sandwich.find_by(id: params[:id])
        @sandwich.update(sandwich_params)
        redirect_to sandwich_path(@sandwich)
    end

    def destroy
        sandwich = Sandwich.find(params[:id])
        sandwich.destroy
        redirect_to user_sandwiches_path
    end

    private

    def sandwich_params
        params.require(:sandwich).permit(
            :sandwich_name, :bread_name, :grill, :open_face, :user_id, 
                sandwich_fillings_attributes: [:id, :quantity, :filling_name])
    end

end
