class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :reviews
  has_many :user_services
  has_many :services, :through => :user_services
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, format: { with: /\A.*@.*\.com\z/ }
  validates :password, presence: true, length: { minimum: 7 }
  validates :address, presence: true
  validates :phone_number, presence: true
  validates :status, inclusion: { in: %w(worker seeker)}
  validates :description, presence: true, if: :workidz?
  validates :age, presence: true, if: :workidz?
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable


  def workidz?
      status == worker
  end
        
end
