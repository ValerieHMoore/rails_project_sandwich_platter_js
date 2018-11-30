class SandwichFilling < ApplicationRecord
  belongs_to :sandwich
  belongs_to :filling

  validates :quantity, presence: true

end
