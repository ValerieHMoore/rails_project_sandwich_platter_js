Rails.application.routes.draw do
  resources :sandwich_fillings
  resources :fillings
  resources :sandwiches
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
