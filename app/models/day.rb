class Day < ApplicationRecord
    has_many :notes
    validates :mooddate, :moodrating, :moodword, presence: true
    validates :moodrating, numericality: { only_integer: true, less_than_or_equal_to: 10, greater_than_or_equal_to: 0    } 
    validates :mooddate, uniqueness: true

    def self.ransackable_attributes(auth_object = nil)
        ["moodrating", "moodword", "moodjournal", "mooddate"]
    end
    def self.ransackable_associations(auth_object = nil)
        []
    end

end
