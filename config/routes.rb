Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations',
    omniauth_callbacks: 'authentication/omniauth_callbacks'
  }

  devise_scope :user do
   post '/signout', to: 'devise/sessions#destroy', as: :signout
  end

  post '/custom_sign_up', to: 'authentication/omniauth_callbacks#custom_sign_up'

  # If user is login
  authenticated :user do
    root 'main#index', as: :authenticated_root
  end

  root 'main#login'

  resources :posts

  #==================== Api =====================#
  use_doorkeeper

  namespace :api, defaults: { format: "json" }do
    resources :posts, controller: :posts, only: [:index]
  end
end
