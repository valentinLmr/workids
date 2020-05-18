class UserServicesController < ApplicationController
    def index
      @user_services = UserService.search(params[:search])
    end 

    def show
      @userService = UserService.find(params[:id])
    end

    def new
      @services = Service.all
      @user_service = UserService.new
    end 

    def create 
      @user_service = UserService.new(params_userService)
      @user = current_user
      @user_service.user = @user = current_user
      @user_service.save!
    end 

    private

    def params_userService
      params.require(:user_service).permit(:service_id, :price, :description)
    end
    

end
