class AddIconSelectToServices < ActiveRecord::Migration[6.0]
  def change
    add_column :services, :selected, :string
  end
end
