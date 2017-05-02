Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'authentication/sessions',
    registrations: 'authentication/registrations',
    omniauth_callbacks: 'authentication/omniauth_callbacks'
  }

  post '/custom_sign_up', to: 'authentication/omniauth_callbacks#custom_sign_up'

  # If user is login
  authenticated :user do
    root 'main#dashboard', as: :authenticated_root
  end
  root 'main#home'
end
