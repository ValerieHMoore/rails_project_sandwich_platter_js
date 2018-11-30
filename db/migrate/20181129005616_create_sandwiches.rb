class CreateSandwiches < ActiveRecord::Migration[5.2]
  def change
    create_table :sandwiches do |t|
      t.integer :user_id
      t.string :sandwich_name
      t.string :bread_name
      t.boolean :grill
      t.boolean :open_face

      t.timestamps
    end
  end
end
