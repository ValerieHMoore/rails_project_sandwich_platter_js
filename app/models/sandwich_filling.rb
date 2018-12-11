class SandwichFilling < ApplicationRecord
  belongs_to :sandwich
  belongs_to :filling

  def filling_name
    self.filling.filling_name if self.filling
  end

  def filling_name=(name)
    self.filling = Filling.find_or_create_by(filling_name: name)
  end

end
