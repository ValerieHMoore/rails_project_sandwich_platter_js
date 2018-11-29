class Filling < ApplicationRecord
    has_many :sandwich_fillings
    has_many :sandwiches, through: :sandwich_fillings
    accepts_nested_attributes_for :sandwich_fillings

    validates :filling_name, presence: true
end
