class SessionsController < ApplicationController

    def new
    end
          
    def create
      user = User.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
      redirect_to sandwiches_path
      else
        render :new
      end
    end

    def destroy
      session.clear
      redirect_to root_path
    end

end
