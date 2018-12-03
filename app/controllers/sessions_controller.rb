class SessionsController < ApplicationController

    def new
    end
          
    # def create
    #   @user = User.find_or_create_by(uid: auth['uid']) do |u|
    #     u.name = auth['info']['name']
    #     u.email = auth['info']['email']
    #     u.image = auth['info']['image']
    #   end
   
    #   session[:user_id] = @user.id
   
    #   render 'welcome/home'
    # end
    
    def create
      @user = User.find_by(email: params[:session][:email].downcase)
      if @user && @user.authenticate(params[:session][:password])
        session[:user_id] = @user.id 
        redirect_to sandwiches_path(@user)
        # binding.pry
      else
        render :new
      end
    end

    def destroy
      session.clear
      redirect_to root_path
    end

    private

    def session_params
      params.require(:user).permit(:email, :password)
    end

    def auth
      request.env['omniauth.auth']
    end

end
