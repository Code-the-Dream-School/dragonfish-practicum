Rails.application.routes.draw do

  root to: 'home#index'
  devise_for :users
  # root 'days#index', as: 'home'

  get 'search', to: 'search#index'

  resources :days do
    resources :notes
  end

end
