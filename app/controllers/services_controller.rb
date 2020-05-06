class ServicesController < ApplicationController

    def index
        @query = "%#{params[:search]}%"
        @services= Service.where('name LIKE ?', @query)
    end
end
