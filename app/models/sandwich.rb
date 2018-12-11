class Sandwich < ApplicationRecord
    belongs_to :user, optional: true
    has_many :sandwich_fillings, dependent: :delete_all
    has_many :fillings, through: :sandwich_fillings
    
    accepts_nested_attributes_for :fillings, allow_destroy: true, reject_if: -> (attributes){attributes[:filling_name]==""}

    # accepts_nested_attributes_for :sandwich_fillings, allow_destroy: true, reject_if: -> (attributes){raise attributes.inspect }
    # "fillings_attributes"=>{"5"=>{"filling_name"=>"", "sandwich_fillings_attributes"=>{"0"=>{"quantity"=>""}}},
    # if attributes[:quantity]==""

    validates :sandwich_name, presence: true
    validates :bread_name, presence: true

    scope :grilled, -> { where(grill: true) }
    scope :open_faced, -> { where(open_face: true) }

    # def fillings_attributes=(fillings_attributes)
    #     self.fillings.destroy_all
    #     fillings_attributes.values.each do |filling_attributes|
    #       self.fillings.build(filling_attributes)
    #     end
    # end

end
