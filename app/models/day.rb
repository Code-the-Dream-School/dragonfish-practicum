class Day < ApplicationRecord
    belongs_to :user
    has_many :notes
    
    validates :mooddate, uniqueness: { scope: :user_id }, presence: { message: '- You must select a date.' }
    validates :moodjournal, presence: { message: '- Please add some notes for your future self.' }
    validates :moodword, presence: { message: '- Please add a single word describing your day.' }
    validates :moodrating, 
                numericality: { 
                    only_integer: true, 
                    less_than_or_equal_to: 10, 
                    greater_than_or_equal_to: 0
                },
                presence: { message: '- Please select a value.' }

    def self.ransackable_attributes(auth_object = nil)
        ["moodrating", "moodword", "moodjournal", "mooddate", "isbookmarked"]
    end
    def self.ransackable_associations(auth_object = nil)
        []
    end

end
