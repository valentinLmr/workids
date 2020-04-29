class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.date :date
      t.time :start_time
      t.time :end_time
      t.string :address
      t.boolean :validating
      t.boolean :validated
      t.references :user, null: false, foreign_key: true
      t.references :user_services, null: false, foreign_key: true

      t.timestamps
    end
  end
end
