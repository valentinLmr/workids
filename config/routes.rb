Rails.application.routes.draw do
  resources :room_messages
  resources :rooms
  devise_for :users, controllers: { registrations: "registrations" }
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get '/dashboard', to: 'pages#dashboard'

  resources :user_services, only: [:new, :create, :index, :show] do 
    resources :appointments, only: [:new, :create]
  end

  resources :services, only: [:index]
  resources :availabilities, only:[:new, :create]
  resources :room_messages
  resources :rooms
end
