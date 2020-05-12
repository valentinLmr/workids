class UserService < ApplicationRecord
  belongs_to :user
  belongs_to :service
  has_many :appointment
  validates :description, presence: true
  validates :price, presence: true


end
