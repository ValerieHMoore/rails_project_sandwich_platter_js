class SandwichFilling < ApplicationRecord
  belongs_to :sandwich, optional: true
  belongs_to :filling, optional: true

  # validates :quantity, presence: true

end
