class FillingSerializer < ActiveModel::Serializer
  attributes :id, :filling_name

  has_many :sandwich_fillings
  has_many :sandwiches
  
end
