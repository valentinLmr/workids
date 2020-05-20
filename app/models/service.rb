class Service < ApplicationRecord

    has_many :user_services, :dependent => :destroy 
    has_many :users, :through => :user_services  
    validates :name, presence: true
    validates :icon, presence: true 
end
