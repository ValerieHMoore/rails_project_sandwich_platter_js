class User < ApplicationRecord
    has_many :sandwiches
   
    has_secure_password
    
    validates :email, presence: true
    validates :email, uniqueness: true 
    validates :password, length: { minimum: 8 }
    validates :password, confirmation: true
    validates :password_confirmation, presence: true

end
