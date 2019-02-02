class SandwichFillingSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :sandwich_id, :filling_id

  belongs_to :sandwich
  belongs_to :filling
  
end
