#////////////////// Users //////////////////////////////
doris = User.create(username: 'bloodinia')


#///////////////// Restaurants & Drinks ////////////////

tgifriday = Restaurant.create(name: `TGI Friday's` ,address: '7000 Austin St, Queens, NY 11375', category: 'American')
    tgifriday.drinks.create(name: 'Double Berry Mojito', category:'main', ingredients: 'Bacardi Rum, strawberry, raspberry, fresh mint,
    Sprite®', image_url: 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.18172-8/19237943_10155220988675218_3724854548421902363_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=VqZQjGkRGxkAX8kiC8-&_nc_ht=scontent-lga3-1.xx&oh=00_AT9ksym4a4HLX0BXs3ZF9VCA5ZNzNVOlCelD_Ah7DVV2fQ&oe=627054FE')
hisae = Restaurant.create(name: `212 Hisae's` ,address: '212 E 9th St, New York, NY 10003', category: 'Asian Fusion')
elcoyote = Restaurant.create(name: `El Coyote` ,address: '70-09 Austin St 2nd floor, Queens, NY 11375', category: 'Mexican')
applebees = Restaurant.create(name: `Applebee's Grill + Bar` ,address: '9015 Queens Blvd, Queens, NY 11373', category: 'American')
chilis = Restaurant.create(name: `Chili's Grill & Bar` ,address: '80-16 Cooper Ave, Queens, NY 11385', category: 'American')
barcade = Restaurant.create(name: `Barcade` ,address: '6 St Marks Pl, New York, NY 10003', category: 'American')

