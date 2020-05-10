Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get '/dashboard', to: 'pages#dashboard'

  resources :user_services, only: [:new, :create, :index]
  resources :services, only: [:index]
end
