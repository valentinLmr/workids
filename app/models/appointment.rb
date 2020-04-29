class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :user_services
  validates :date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :address, presence: true
  validates :validating, presence: true
  validates :validated, presence: true 
end
