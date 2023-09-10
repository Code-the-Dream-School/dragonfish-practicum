class AddUserIdToDays < ActiveRecord::Migration[7.0]
  def change
    add_reference :days, :user, foreign_key: true
  end
end
