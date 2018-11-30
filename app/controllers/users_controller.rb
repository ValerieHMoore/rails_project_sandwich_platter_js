class UsersController < ApplicationController
    
    def new
        @user = User.new
    end
        
    def create
        @user = User.create(user_params)
        if @user
            session[:user_id] = @user.id
            redirect_to sandwiches_path
        else
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password_digest)
    end

end
