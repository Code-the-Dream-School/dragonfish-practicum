class AddDayToNotes < ActiveRecord::Migration[7.0]
  def change
    add_column :notes, :day_id, :integer
    add_index :notes, :day_id
  end
end
