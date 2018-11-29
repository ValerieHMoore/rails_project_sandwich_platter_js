class CreateFillings < ActiveRecord::Migration[5.2]
  def change
    create_table :fillings do |t|
      t.string :filling_name

      t.timestamps
    end
  end
end
