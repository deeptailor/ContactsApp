class GroupContact < ActiveRecord::Base

  validates :contact_id, :group_id, presence:true
  validates_uniqueness_of :group_id, :scope => [:contact_id]

  belongs_to :contact,
  inverse_of: :group_contacts

  belongs_to :group,
  inverse_of: :group_contacts

end
