class ServicesController < ApplicationController

    def index
        @services = Service.all
        @searchform = params[:formsearch]
        if @searchform
            @querySearch     = @searchform[:search]
            @queryDate       = @searchform[:date].to_date
            
            @queryStartTime  = @searchform[:starts_time].to_f 
            @queryTiming     = @searchform[:timing].to_i
            @endTime         =   @queryStartTime + @queryTiming
            @service         = Service.find{|service| service.name == @querySearch}

            @users           = @service.users.joins(:availability).where('date = ?', @queryDate).where('start_time <= ? ', @queryStartTime).where('end_time >= ?', @endTime)
            @userService = @users.each do |user|
                array = []
                userObj = {
                    user:user,
                    user_service: user.user_services.find{|user_service| user_service.service_id == @service.id}
                }
                array.push(userObj)
                return array
            end          
        end
                
        

       

            
    end


    private

    def availableUsers(users)
        availableUser = []

        users.each{ |user|  availableUser.push(user)  }
        raise
    end
end
