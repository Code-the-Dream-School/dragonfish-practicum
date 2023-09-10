class Day < ApplicationRecord
    belongs_to :user
    has_many :notes
    
    validates :mooddate, uniqueness: true
    validates :moodword, :moodjournal, 
                presence: true , allow_blank: false
    validates :moodrating, presence: true, 
                numericality: { 
                    only_integer: true, 
                    less_than_or_equal_to: 10, 
                    greater_than_or_equal_to: 0
                } 

    def self.ransackable_attributes(auth_object = nil)
        ["moodrating", "moodword", "moodjournal", "mooddate", "isbookmarked"]
    end
    def self.ransackable_associations(auth_object = nil)
        []
    end

end
