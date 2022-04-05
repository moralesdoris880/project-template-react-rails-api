class CreateDrinks < ActiveRecord::Migration[6.1]
  def change
    create_table :drinks do |t|
      t.string :restaurant_id
      t.string :name
      t.string :category
      t.string :ingredients
      t.integer :price
      t.string :image_url
      t.timestamps
    end
  end
end
