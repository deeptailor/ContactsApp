@groups.each do |g|
  json.set! g.id do
    json.partial! 'group', group: g

    json.contacts g.contacts do |contact|
      json.partial! 'api/contacts/contact', contact: contact
    end
  end
end
