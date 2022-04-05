class Restaurant < ApplicationRecord
    has_many :drinks

    validates :name, presence: true
    validates :address, presence: true,uniqueness: true
end
