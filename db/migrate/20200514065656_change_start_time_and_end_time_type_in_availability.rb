class ChangeStartTimeAndEndTimeTypeInAvailability < ActiveRecord::Migration[6.0]
  def change
    change_column :availabilities, :start_time, :string
    change_column :availabilities, :end_time, :string
  end
end
