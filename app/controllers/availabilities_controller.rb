class AvailabilitiesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
    def new
      @user = current_user
      @allAvailabilitiesFromToday = availabilities(@user.availability)
      @availabilities = Availability.new
    end 

    def create
        @user = current_user
        @availabilities =  Availability.new(params_availability)
        @availabilities.user = @user
        @availabilities.save!
    end 

  private


  def availabilities(availabilities)
    arrayAvailabilities = []
    availabilities.each do |date|
      
      if date.date > Date.today

        date = {
          id: date.id,
          date: date.date,
          start_time: date.start_time,
          end_time: date.end_time
        }
        arrayAvailabilities.push(date)
      end
    end
      return arrayAvailabilities
      
      
  end

  def params_availability
    params.require(:availability).permit(:start_time, :end_time, :date)
  end
end
