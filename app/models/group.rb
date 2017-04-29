class Group < ActiveRecord::Base
  validates :name, presence:true

  has_many :contacts, through: :group_contacts, source: :contact

  has_many :group_contacts
end
