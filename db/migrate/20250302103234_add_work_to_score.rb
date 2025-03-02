class AddWorkToScore < ActiveRecord::Migration[8.0]
  def change
    add_reference :scores, :work, null: false, foreign_key: true
  end
end
