class SandwichesController < ApplicationController

    def new
        @sandwich = Sandwich.new
        10.times {@sandwich.fillings.build}
        @sandwich.fillings.each do |i|
        i.sandwich_fillings.build
        end
    end

    def create
        @sandwich = Sandwich.new(sandwich_params)
        if @sandwich.save
            redirect_to sandwich_path(@sandwich)
        else
          10.times do
            sandwich_filling = @sandwich.sandwich_fillings.build
            sandwich_filling.build_filling
        end 
        render :new
        end
    end
    
    def index
        @sandwiches = Sandwich.all
    end

    def show
        @sandwich = Sandwich.find_by(id: params[:id])
    end

    def edit
        @sandwich = Sandwich.find_by(id: params[:id])
    end

    def grilled
        @sandwiches = Sandwich.grilled
    end

    def open_faced
        @sandwiches = Sandwich.open_faced
    end
    
    def update
        @sandwich = Sandwich.find_by(id: params[:id])
        @sandwich.update(sandwich_params)
        redirect_to sandwich_path(@sandwich)
    end

    private

    def sandwich_params
        params.require(:sandwich).permit(:sandwich_name, :bread_name, :grill, :open_face, fillings_attributes: [:filling_name, sandwich_fillings_attributes: [:quantity]])
    end

end

