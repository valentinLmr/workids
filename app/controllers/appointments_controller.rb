class AppointmentsController < ApplicationController
    def new
        @user = current_user
        @user_service = UserService.find(params[:user_service_id])
        @appointment = Appointment.new
    end
    def create 
        @user = current_user
        @user_service = UserService.find(params[:user_service_id])
        @appointment = Appointment.new(params_appointment)
        @appointment.user = @user
        @appointment.user_service_id = @user_service.id
        if @appointment.save!
            redirect_to dashboard_path
        end
    end

    private

    def params_appointment
      params.require(:appointment).permit(:date, :start_time, :end_time, :address)
    end
    
end
