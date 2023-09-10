class Note < ApplicationRecord
    belongs_to :day
    validates :content, presence: true

    
end
