class CreateUserServices < ActiveRecord::Migration[6.0]
  def change
    create_table :user_services do |t|
      t.references :user, null: false, foreign_key: true
      t.references :service, null: false, foreign_key: true
      t.text :description
      t.integer :price

      t.timestamps
    end
  end
end
