class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.string :user_id
      t.string :drink_id
      t.integer :rating
      t.timestamps
    end
  end
end
