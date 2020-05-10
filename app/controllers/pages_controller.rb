class PagesController < ApplicationController
    def home
    end

    def dashboard
        @user = current_user
        @date = date?(@user)
    end 



    private
    def date?(user)
        datesArray = []
        user.user_services.each  do |user_service| 
           if user_service.availability != []
                datesArray.push(user_service.availability)  
           end
        end
        return datesArray
    end 
end
