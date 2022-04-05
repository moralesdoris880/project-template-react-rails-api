class Rating < ApplicationRecord
    belongs_to :user

    validates :rating, presence: true
end
