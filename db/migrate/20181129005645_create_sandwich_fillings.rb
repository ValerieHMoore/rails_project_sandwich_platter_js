class CreateSandwichFillings < ActiveRecord::Migration[5.2]
  def change
    create_table :sandwich_fillings do |t|
      t.integer :quantity
      t.references :sandwich, foreign_key: true
      t.references :filling, foreign_key: true

      t.timestamps
    end
  end
end
