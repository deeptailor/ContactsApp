json.extract! @group, :id, :name, :image

json.contacts @contacts do |contact|
  json.partial! 'api/contacts/contact', contact: contact
end
