class ServicesController < ApplicationController

    def index

        @searchform = params[:formsearch]
        if @searchform
            @querySearch   = @searchform[:search]
            @queryDate = @searchform[:date].to_date
            @queryStartTime = @searchform[:starts_time].to_f
            @queryTiming = @searchform[:timing]
            @service = Service.where('name LIKE ?', @querySearch)  
            
            @users = UserService.where('service_id LIKE ?', @service.first.usid)
            raise
        end
                
        @services = Service.all

       

            
    end
end
