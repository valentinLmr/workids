class Option < ApplicationRecord
  belongs_to :service
  validates :title, presence: true
  validates :validated, presence: true


end
