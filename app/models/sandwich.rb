class Sandwich < ApplicationRecord
    has_many :fillings, through: :quantity
end
