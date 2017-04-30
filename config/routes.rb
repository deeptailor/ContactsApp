Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do

    resources :contacts, only: [:create, :index, :show, :destroy]
    resources :groups, only: [:index, :show, :destroy, :create]
    resources :group_contacts, only: [:create, :destroy]

  end

  root "static_pages#root"
end
