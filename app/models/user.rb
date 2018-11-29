class User < ApplicationRecord
    has_many :sandwiches
    has_secure_password

    validates :email, presence: true
    validates :email, uniqueness: true 
    
    validates :password_digest, presence: true
end
