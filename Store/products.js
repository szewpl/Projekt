var Description = [
    {"Seria":"Classic","Nazwa": "Creative Bricks","Wiek": "4-99","Ilość klocków": "100-250","Opis":"Rzuć się w wir kreatywnej zabawy za pomocą tego zestawu klocków LEGO i daj się ponieść własnej wyobraźni! Zestaw oferuje nieograniczone możliwości budowania za pomocą klasycznych klocków w 29 różnych kolorach oraz elementów specjalnych takich jak drzwi, okna, koła, oczy czy śmigła. A jeśli nie wiesz od czego zacząć, możesz wspomóc się dołączonymi instrukcjami z przykładowymi pomysłami."},
    {"Ekran":"15,6 cala, 1920 x 1080 pikseli","Procesor":"Intel Core i5 10gen 10300H","Liczba rdzeni":4,"Pamięć RAM":8 +" GB","Karta graficzna": "nVidia GeForce GTX1650 Ti"},
];

var Products = [
    {id:0,id_category:4,name:"Klocki LEGO Classic",img:"pictures/klockilegoclassic.jpg",price:129.99,description: Description[0]},
    {id:1,id_category:8,name:"Laptop Asus",img:"pictures/laptopasus.png",price:2199.99,description: Description[1]},
];

console.log(Object.keys(Products[0].description)[3]);