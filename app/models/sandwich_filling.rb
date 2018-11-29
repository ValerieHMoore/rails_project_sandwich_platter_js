class SandwichFilling < ApplicationRecord
  belongs_to :sandwich
  belongs_to :filling

  validates :quantity, presence: true

  # accepts_nested_attributes_for :fillings
  # accepts_nested_attributes_for :sandwiches
  
end
