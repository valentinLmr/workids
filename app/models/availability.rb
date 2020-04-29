class Availability < ApplicationRecord
  belongs_to :user_service
  validates :date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
end
