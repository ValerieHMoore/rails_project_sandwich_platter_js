class Sandwich < ApplicationRecord
    belongs_to :user, optional: true
    has_many :sandwich_fillings, dependent: :delete_all
    has_many :fillings, through: :sandwich_fillings

    accepts_nested_attributes_for :sandwich_fillings
    
    # accepts_nested_attributes_for :sandwich_fillings, allow_destroy: true, reject_if: -> (attribute){ (attribute[:quantity]== "" or attribute[:filling_name]=="")}

    # accepts_nested_attributes_for :sandwich_fillings, allow_destroy: true, reject_if: -> (attribute){raise attribute.inspect if (attribute[:quantity]== "" or attribute[:filling_name]=="")}

    validates :sandwich_name, presence: true
    validates :bread_name, presence: true

    scope :grilled, -> { where(grill: true) }
    scope :open_faced, -> { where(open_face: true) }

    # def sandwich_fillings_attributes=(sandwich_fillings_attributes)
    #     sandwich_fillings_attributes.values.each do |sandwich_filling_attributes|
    #       unless sandwich_filling_attributes[:filling_name].blank?
    #         sandwich_filling = SandwichFilling.new(sandwich_filling_attributes)
    #         self.sandwich_fillings << sandwich_filling
    #       end
    #     end
    # end

end
