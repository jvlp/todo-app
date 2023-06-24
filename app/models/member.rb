class Member < ApplicationRecord
    has_secure_password
    has_many :tasks, dependent: :delete_all
    validates_presence_of :name, :email, :password
    validates_length_of :name, minimum: 5
    validates_length_of :password, minimum: 3
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :email, :uniqueness => { :case_sensitive => false }
end
