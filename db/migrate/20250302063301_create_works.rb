class CreateWorks < ActiveRecord::Migration[8.0]
  def change
    create_table :works do |t|
      t.string :title
      t.string :subtitle
      t.string :composer
      t.text :notes

      t.timestamps
    end
  end
end
