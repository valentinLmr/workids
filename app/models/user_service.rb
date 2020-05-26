class UserService < ApplicationRecord
  belongs_to :user 
  belongs_to :service  
  has_many :appointments
  has_many :reviews, :dependent => :destroy 
  validates :description, presence: true
  validates :price, presence: true


end
