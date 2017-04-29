@groups.each do |g|
  json.set! g.id do
    json.partial! 'group', group: g
  end
end
