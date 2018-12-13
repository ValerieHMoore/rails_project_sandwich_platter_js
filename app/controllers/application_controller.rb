class ApplicationController < ActionController::Base

  helper_method :logged_in?

  helper_method :current_user
    
  #for redirects
  def current_user
    if session[:user_id]
    @current_user ||= User.find_by(id: session[:user_id])
    end
  end

  #for controllers
  def require_login
    redirect_to login_path unless logged_in?
  end
  
  #for views, if helper method
  def logged_in?
    !!current_user
  end
  
end