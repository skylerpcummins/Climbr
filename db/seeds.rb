# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Photo.create({title: 'The Nose', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f49c9e4b06af68212741b/547bd595e4b06290cab5d16d/1417403920051/?format=500w', user_id: 1})
Photo.create({title: 'Jugging', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f49c9e4b06af68212741b/543f63a1e4b00ba1352c649e/1413440427798/Paradox-1-3.jpg?format=750w', user_id: 1})
Photo.create({title: 'Red C4 Placement', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f49c9e4b06af68212741b/543f637ee4b0e172550344ff/1413440387194/adventure-1-2.jpg?format=500w', user_id: 1})
Photo.create({title: 'Middle Cathedral', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f49c9e4b06af68212741b/543f6385e4b00ba1352c6464/1429419193473/Paradox-1.jpg?format=750w', user_id: 1})
Photo.create({title: 'El Cap Summit', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543df297e4b09468ab1f6dfe/544077cbe4b08d9eb20fab71/1413511125801/Paradox-1-16.jpg?format=750w', user_id: 1})
Photo.create({title: 'Cragging at The New', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543df297e4b09468ab1f6dfe/543df3e5e4b0166dd7da3b28/1413346278439/climbing-18.jpg?format=500w', user_id: 1})
Photo.create({title: 'Buttermilks Topout', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543df297e4b09468ab1f6dfe/543df392e4b0c26d0d716367/1413346194882/climbing-28.jpg?format=500w', user_id: 1})
Photo.create({title: 'Buttermilks Highball', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543df297e4b09468ab1f6dfe/543df349e4b0fffb4574edd4/1413346122057/climbing-8.jpg?format=500w', user_id: 2})
Photo.create({title: 'Hanging Out', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543df297e4b09468ab1f6dfe/54407d85e4b04f34e6f6b639/1413512594944/adventure+%281+of+1%29-2.jpg?format=750w', user_id: 2})
Photo.create({title: 'Van Life', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f58bce4b076f3653c5902/543f592be4b0c927dad900fb/1413437749635/Mike+Coffman+Bishop-1.jpg?format=750w', user_id: 2})
Photo.create({title: 'Chaffee County Campsite', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f58bce4b076f3653c5902/54ceff3ce4b01fa0f0c0217e/1422851901053/GuinnPhotography-5.jpg?format=750w', user_id: 2})
Photo.create({title: 'Camp 4 Messageboard', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f58bce4b076f3653c5902/543f5934e4b0e172550337a4/1413437763925/valleylife-1.jpg?format=500w', user_id: 2})
Photo.create({title: 'The Sentinel Reflection', photo_url: 'http://static1.squarespace.com/static/53e3fbc3e4b0b8dd830e3570/543f5f3fe4b0e17255033fd9/54408f3de4b02f1c0e51337d/1413517129399/landscape+%281+of+1%29-2.jpg?format=750w', user_id: 2})
User.create({email: 'skylerpcummins@gmail.com', password_digest: '$2a$10$Hy5K4vY64utMPy2Wetwpe.08eba45kXCde5G/KbSdyaEE4BscZWfa'})
User.create({email: 'macklin@test.com', password_digest: '$2a$10$6OHzi1RNCt9ISJd/bVPSs.9QsbG.HeSI31GYYmgvFIaOdbDtyG3Fy'})
