class UserServicesController < ApplicationController
    def index
       @user_services = User_service.all
    end 

    def new
      @services = Service.all
      @user_service = UserService.new
    end 

    def create 
        @user_service = UserService.new
        if @user_service.save
          redirect_to home_path
        else
          render :new
        end
    end 

    def show
    end 

    def edit
    end 

    def update
    end

    def delete
    end
end
