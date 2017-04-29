class Contact < ActiveRecord::Base

  validates :firstname, presence:true

  belongs_to :group

  has_many :group_contacts, dependent: :destroy
end
