def index
        if params[:user_id] && current_user.id == params[:user_id].to_i
          @user = current_user
          @sandwiches = @user.sandwiches
        elsif params[:user_id]
          flash[:alert] = "Leave my provolone! (Not your recipes)"
          redirect_to sandwiches_path
        else
          @sandwiches = Sandwich.all
        end
    end

    <%= link_to "Create a New Sandwich", new_sandwich_path %><br>