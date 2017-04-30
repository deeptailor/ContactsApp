# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Contact.create(
  {firstname: 'Deep', lastname: 'Tailor', number: '1234567890', profile_image_url: 'https://res.cloudinary.com/deeptailor/image/upload/v1486414290/Deep_Tailor-picture-cropped_mt6xp3.jpg'}
)
Contact.create(
  {firstname: 'Chok', lastname: 'Lam', number: '1234567890', profile_image_url: 'https://res.cloudinary.com/deeptailor/image/upload/v1493424462/chok_sppn7z.jpg'}
)


Group.create({name: 'TP-Link', image: 'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1493424604/TPLINK_Logo_2_yfh62u.jpg'})


GroupContact.create(
  {contact_id: 1, group_id: 1}

)
GroupContact.create(
  {contact_id: 2, group_id: 1}
)
