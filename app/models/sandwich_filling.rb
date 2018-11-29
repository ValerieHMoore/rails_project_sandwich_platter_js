class SandwichFilling < ApplicationRecord
  belongs_to :sandwich
  belongs_to :filling
  accepts_nested_attributes_for :filling
end
