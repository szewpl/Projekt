var btadd = document.getElementById("addprod");

const AsusZenBookPro15 = {"Id":0,"category_id":8,"Nazwa":"Asus ZenBook Pro 15","url":"https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2019/9/pr_2019_9_24_12_35_39_643_01.jpg","Cena":7499.00,"Opis":"ZenBook Pro 15 został zaprojektowany z myślą o zapewnieniu wysokiej mocy i produktywności, dlatego idealnie pomoże Ci w tworzeniu treści – w każdym miejscu i czasie."};
localStorage.setItem("Produkt"+AsusZenBookPro15.Id,JSON.stringify(AsusZenBookPro15));

const Teddybear = {"Id":1,"category_id":2,"Nazwa":"Miś maskotka","url":"https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/teddykompaniet-love-maskotka-mis-szary-20-cm-6661958.jpg","Cena":25.99,"Opis":"Mięciutki miś idealnie nadaje się do zabawy oraz do przytulenia podczas snu. Przeznaczony dla dzieci 0+.",};
localStorage.setItem("Produkt"+Teddybear.Id,JSON.stringify(Teddybear));

const CityLineNewYorkCity = {"Id":2,"category_id":3,"Nazwa":"City Line New York City","url":"https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/dante-city-line-new-york-city-puzzle-3d-6390154.jpg","Cena":45.99,"Opis":"Puzzle 3D to pasjonująca zabawa dla dzieci i dla dorosłych. W opakowaniu znajduje się 123 puzzli, wykonanych ze specjalnego materiału przypominającego piankę."};
localStorage.setItem("Produkt"+CityLineNewYorkCity.Id,JSON.stringify(CityLineNewYorkCity));

const LegoWalkawKresie = {"Id":3,"category_id":4,"Nazwa":"Walka w Kresie","url":"https://img.smyk.com/958x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/lego-minecraft-walka-w-kresie-21151-6397366.jpg","Cena":65.89,"Opis":"Chcesz zwyciężyć z ziejącym ognistymi kulami Smokiem w walce w Kresie? Szykuj się do decydującego starcia w stylu LEGO Minecraft. Przy pomocy mikstury, Perła Endu i zaklętego mieczu zniszcz Kryształ Kresu i pokonaj Endermana. Z tym zestawem możesz odgrywać przygodyz e świata Minecraft. Łącząc go z innymi modelami z serii, zbudujesz własne uniwersum LEGO Minecraft."};
localStorage.setItem("Produkt"+LegoWalkawKresie.Id,JSON.stringify(LegoWalkawKresie));

const SamolotMechanik = {"Id":4,"category_id":6,"Nazwa":"Samolot mechanik","url":"https://img.smyk.com/958x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/clementoni-laboratorium-mechaniki-samoloty-i-helikoptery-zestaw-konstrukcyjny-200-elementow-6090319.jpg","Cena":61.49,"Opis":"Laboratorium Mechaniki - Samoloty i helikoptery Clementoni to zestaw naukowy do odkrywania i eksperymentowania z mechaniką lotu. Odkryj tajniki aerodynamiki z Laboratorium Mechaniki!"};
localStorage.setItem("Produkt"+SamolotMechanik.Id,JSON.stringify(SamolotMechanik));

const cwiczeniazkodowania = {"Id":5,"category_id":7,"Nazwa":"Ćwiczenia z kodowania","url":"https://img.smyk.com/958x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/cwiczenia-z-kodowania-bede-programista-klasa-1-3-6662261.jpg","Cena":7.49,"Opis":"Kodowanie to klucz do świata komputerów i doskonały sposób rozwijania wielu kompetencji. Nauka kodowania to jednocześnie nauka przyczynowo-skutkowego myślenia, dostrzegania oraz rozwiązywania problemów nie tylko wcześniej spotykanych, ale również całkiem nowych."};
localStorage.setItem("Produkt"+cwiczeniazkodowania.Id,JSON.stringify(cwiczeniazkodowania));

class createProduct{
    savels(){
        if(localStorage.getItem("product_id") < 6)
        {
            localStorage.setItem("product_id",6);
            var prod={"Id":parseInt(localStorage.getItem("product_id")),"category_id":select.value,"url":zdj.value,"Cena":price.value,"Opis":textarea.value,"Nazwa":nameprod.value};
        
            localStorage.setItem("Produkt"+parseInt(localStorage.getItem("product_id")),JSON.stringify(prod));
            location.reload();
        }else{
            localStorage.setItem("product_id",parseInt(localStorage.getItem("product_id"))+1);
            var prod={"Id":parseInt(localStorage.getItem("product_id")),"category_id":select.value,"url":zdj.value,"Cena":price.value,"Opis":textarea.value,"Nazwa":nameprod.value};
        
            localStorage.setItem("Produkt"+parseInt(localStorage.getItem("product_id")),JSON.stringify(prod));
            location.reload();
        }
    }
}

function display_products(){
    var p = document.getElementById("products");
    for(let i = 0;i<parseInt(localStorage.getItem("product_id"));i++){
        var img = document.createElement("img");
        var nameimg = document.createElement("h3"); 
        var div = document.createElement("div");
        var a = document.createElement("a");
        var obj = JSON.parse(localStorage.getItem("Produkt"+i));


        a.innerHTML = obj.Opis;
        div.style.float = "right";
        div.setAttribute('style',"margin-left:auto;margin-right:auto;");
        nameimg.innerHTML = obj.Nazwa;
        img.src = obj.url;
        img.style.width = "300px";
        img.style.height = "300px";
        img.style.grid

        div.appendChild(a);
        p.appendChild(nameimg);
        p.appendChild(img);
        p.appendChild(div);
    }
}

var c = new createProduct();
if(btadd)
{
    btadd.addEventListener("click",()=>{
    c.savels();
    });
}
