class Review < ApplicationRecord
  belongs_to :user
  belongs_to :user_service
  validates :content, presence: true
  validates :rating, presence: true

end
