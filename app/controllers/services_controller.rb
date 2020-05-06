class ServicesController < ApplicationController

    def index
        @query   = "%#{params[:search]}%"
        @services = Service.all
        @service = Service.where('name LIKE ?', @query)
    end
end
