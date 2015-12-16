Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :static_pages, only: [:root]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :photos, only: [:index, :create, :show]
  end
end
