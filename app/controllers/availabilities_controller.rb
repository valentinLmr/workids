class AvailabilitiesController < ApplicationController
    def new
        @availabilities = Availability.new
    end 

    def create
        @user = current_user
        @availabilities =  Availability.new(params_availability)
        @availabilities.user = @user
        @availabilities.save!
    end 

  private

  def params_availability
    params.require(:availability).permit(:start_time, :end_time, :date)
  end
end
