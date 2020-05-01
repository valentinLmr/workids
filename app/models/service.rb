class Service < ApplicationRecord

    CATEGORIES = {
    "babysitting" => "fas fa-baby-carriage",
    "animalKeeper" => "fas fa-paw",
    "gardening" => "fas fa-tree",
    "homeworkHelper" => "fas fa-chalkboard-teacher",
  }
    has_many :user, :through => :user_services
    validates :name, presence: true
    validates :icon, presence: true
end
