Rails.application.routes.draw do

  resources :days do
    resources :notes
  end
  
  devise_for :users
  root 'days#index'
  devise_scope :user do
    get "/sign_in" => "devise/sessions#new"
  end



end
