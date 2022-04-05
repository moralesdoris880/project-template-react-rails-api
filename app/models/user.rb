class User < ApplicationRecord
    has many :drinks, through :restaurant
    has_many :comments
    has_many :ratings
end
