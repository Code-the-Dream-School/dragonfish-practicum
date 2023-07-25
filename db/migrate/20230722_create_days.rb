class CreateDays < ActiveRecord::Migration[7.0]
  def change
    create_table :days do |t|
      t.date :mooddate
      t.integer :moodrating
      t.text :moodjournal
      t.string :moodword

      t.timestamps
    end
  end
end
