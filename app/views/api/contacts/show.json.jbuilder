json.extract! @contact, :id, :firstname, :lastname, :number, :profile_image_url

json.contact do
  json.id @contact.id
  json.firstname @contact.firstname
  json.lastname @contact.lastname
  json.number @contact.number
  json.profile_image_url @contact.profile_image_url
end
