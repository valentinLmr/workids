class RegistrationsController < Devise::RegistrationsController
    protected



    def after_sign_in_path_for(resource)
        if current_user.status == 'Worker'
            dashboard_path
        else
            user_service_path	
        end
    end
  
    def after_sign_up_path_for(resource)
        if current_user.status == 'Worker'
            new_user_service_path
        else
            services_path	
        end
    end

end