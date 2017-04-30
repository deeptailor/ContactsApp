class Contact < ActiveRecord::Base

  validates :firstname, presence:true

  has_many :group_contacts, dependent: :destroy
end
