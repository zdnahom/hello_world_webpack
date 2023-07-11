Rails.application.routes.draw do
  get 'root/index'
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
