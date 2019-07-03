Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :posts do
    collection do
      get 'indexfinish'
    end  
  end
  
  root 'posts#index'
  
  
end


