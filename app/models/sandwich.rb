class Sandwich < ApplicationRecord
    belongs_to :user, optional: true
    has_many :sandwich_fillings
    has_many :fillings, through: :sandwich_fillings
    
    accepts_nested_attributes_for :fillings

    validates :sandwich_name, presence: true
    validates :bread_name, presence: true

    scope :grilled, -> { where(grill: true) }
    scope :open_faced, -> { where(open_face: true) }

end
