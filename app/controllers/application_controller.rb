class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception

    helper_method :current_user
    
    def current_user
     @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end
  
    # def require_login
    #   redirect_to root_path unless logged_in?
    # end
  
    # def logged_in?
    #   !!current_user
    # end
  
    # def current_user
    #   if session[:user_id]
    #   @current_user ||= User.find_by(id: session[:user_id])
    #   end
    # end

  end