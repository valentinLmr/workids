class RegistrationsController < Devise::RegistrationsController
    protected
  
    def after_sign_up_path_for(resource)
        if current_user.status == 'Worker'
            new_user_service_path
        else
            root_path	
        end
    end
end