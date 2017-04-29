class CreateGroupContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :group_contacts do |t|
      t.integer :contact_id, null:false
      t.integer :group_id, null:false
      t.timestamps
    end
    add_index :group_contacts, :contact_id
    add_index :group_contacts, :group_id
  end
end
