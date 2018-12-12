<% @sandwich.fillings.each do |f| %>
  <%= f.filling_name %> 
  <% f.sandwich_fillings.each do |q| %>
    <%= q.quantity %><br>
  <% end %>
<% end %>