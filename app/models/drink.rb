class Drink < ApplicationRecord
    belongs_to :restaurant
    has_many :comments
    has_many :ratings
end
