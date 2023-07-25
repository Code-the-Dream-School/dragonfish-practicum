require 'faker'
FactoryBot.define do
  factory :day do |f|
    f.moodword { Faker::Name.moodword }
  end
end