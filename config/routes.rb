# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  resources :sandwich_fillings
  resources :sandwiches
  
  resources :users do
    resources :sandwiches
  end
  
  root to: 'welcome#home'

  get '/grilled' => 'sandwiches#grilled'
  get '/open_faced' => 'sandwiches#open_faced'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/github/callback' => 'sessions#create'

end