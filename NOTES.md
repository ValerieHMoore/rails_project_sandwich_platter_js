Rails.application.routes.draw do
  resources :sandwich_fillings
  resources :fillings
  resources :sandwiches, only: [:index, :new, :show, :destroy]
  
  resources :users, only: [:new, :create] do
    resources :sandwiches, only: [:new, :create, :index, :update, :edit, :show]
  end
  
  root to: 'welcome#home'

  get '/grilled' => 'sandwiches#grilled'
  get '/open_faced' => 'sandwiches#open_faced'
  
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/auth/github/callback' => 'sessions#create'

end