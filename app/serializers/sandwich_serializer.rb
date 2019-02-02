class SandwichSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sandwich_name, :bread_name, :grill, :open_face

  belongs_to :user
  has_many :sandwich_fillings
  has_many :fillings

end
