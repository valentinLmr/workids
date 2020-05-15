class ChangeStartTimeAndEndTimeTypeInAvailabilityTable < ActiveRecord::Migration[6.0]
    def change
      change_column :availabilities, :start_time, 'float USING CAST(start_time AS float)'
      change_column :availabilities, :end_time, 'float USING CAST(end_time AS float)' 
    end
  end
  