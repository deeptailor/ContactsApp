class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :firstname, null:false
      t.string :lastname
      t.string :profile_image_url
      t.string :number, null:false
      t.timestamps
    end
    add_index :contacts, :firstname, unique:true
  end
end
