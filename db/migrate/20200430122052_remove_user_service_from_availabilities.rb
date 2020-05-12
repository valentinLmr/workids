class RemoveUserServiceFromAvailabilities < ActiveRecord::Migration[6.0]
    def change
        remove_reference :availabilities, :user_service, index: true, foreign_key: true
    end
  end