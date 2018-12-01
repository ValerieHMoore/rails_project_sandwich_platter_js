class SessionsController < ApplicationController

    def new
    end
          
    def create
      @user = User.find_by(:email => user_params[:email])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to sandwiches_path
      else
        redirect_to '/login'
      end
    end

    def destroy
      session.clear
      redirect_to root_path
    end

    private

    def user_params
        params.require(:user).permit(:email, :password_digest)
    end
end
