class ServicesController < ApplicationController

    def index

        @searchform = params[:formsearch]
        if @searchform
            @querySearch   = @searchform[:search]
            @queryDate = @searchform[:date]
            @queryStartTime = @searchform[:time]
            @queryTiming = @searchform[:timing]
        end
                
        @services = Service.all
        @service = Service.where('name LIKE ?', @querySearch)  
            
    end
end
