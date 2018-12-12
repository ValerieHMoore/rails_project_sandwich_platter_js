class ApplicationController < ActionController::Base

  helper_method :logged_in?

  helper_method :current_user
    
    def current_user
      #for redirects
      if session[:user_id]
      @current_user ||= User.find_by(id: session[:user_id])
      end
    end

    def require_login
      #for controllers
      redirect_to login_path unless logged_in?
    end
  
    def logged_in?
      #for views, if helper method
      !!current_user
    end
  

  end