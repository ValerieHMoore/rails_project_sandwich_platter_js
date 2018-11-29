class SessionsController < ApplicationController

    def new
      @user = User.new
      @users = User.all
    end
  
    def create
      @user = User.find_by(:id => user_params[:email])
      if @user
        session[:user_id] = @user.id
        redirect_to user_path(@user)
      else
        redirect_to '/login'
      end
    end

    def destroy
      session[:user_id] = nil
      redirect_to root_path
    end

    private

    def user_params
        params.require(:user).permit(:email, :password_digest)
    end
end