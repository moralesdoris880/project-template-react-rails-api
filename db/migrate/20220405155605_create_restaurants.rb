class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.boolean :happy_hour
      t.string :happy_hour_info
      t.string :category
      t.timestamps
    end
  end
end
