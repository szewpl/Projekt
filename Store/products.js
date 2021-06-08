var btadd = document.getElementById("addprod");

const AsusZenBookPro15 = {"Id":0,"category_id":8,"Nazwa":"Asus ZenBook Pro 15","url":"https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2018/8/pr_2018_8_8_15_37_17_748_01.jpg","Cena":7499.00,"Opis":"ZenBook Pro 15 został zaprojektowany z myślą o zapewnieniu wysokiej mocy i produktywności, dlatego idealnie pomoże Ci w tworzeniu treści – w każdym miejscu i czasie.","Ofertaspecjalna":"true"};
localStorage.setItem("Produkt"+AsusZenBookPro15.Id,JSON.stringify(AsusZenBookPro15));

const Teddybear = {"Id":1,"category_id":2,"Nazwa":"Miś maskotka","url":"https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/teddykompaniet-love-maskotka-mis-szary-20-cm-6661958.jpg","Cena":25.99,"Opis":"Mięciutki miś idealnie nadaje się do zabawy oraz do przytulenia podczas snu. Przeznaczony dla dzieci 0+.","Ofertaspecjalna":"false"};
localStorage.setItem("Produkt"+Teddybear.Id,JSON.stringify(Teddybear));

const CityLineNewYorkCity = {"Id":2,"category_id":3,"Nazwa":"City Line New York City","url":"https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/dante-city-line-new-york-city-puzzle-3d-6390154.jpg","Cena":45.99,"Opis":"Puzzle 3D to pasjonująca zabawa dla dzieci i dla dorosłych. W opakowaniu znajduje się 123 puzzli, wykonanych ze specjalnego materiału przypominającego piankę.","Ofertaspecjalna":"true"};
localStorage.setItem("Produkt"+CityLineNewYorkCity.Id,JSON.stringify(CityLineNewYorkCity));

const LegoWalkawKresie = {"Id":3,"category_id":4,"Nazwa":"Walka w Kresie","url":"https://img.smyk.com/958x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/lego-minecraft-walka-w-kresie-21151-6397366.jpg","Cena":65.89,"Opis":"Chcesz zwyciężyć z ziejącym ognistymi kulami Smokiem w walce w Kresie? Szykuj się do decydującego starcia w stylu LEGO Minecraft. Przy pomocy mikstury, Perła Endu i zaklętego mieczu zniszcz Kryształ Kresu i pokonaj Endermana. Z tym zestawem możesz odgrywać przygodyz e świata Minecraft. Łącząc go z innymi modelami z serii, zbudujesz własne uniwersum LEGO Minecraft.","Ofertaspecjalna":"false"};
localStorage.setItem("Produkt"+LegoWalkawKresie.Id,JSON.stringify(LegoWalkawKresie));

const SamolotMechanik = {"Id":4,"category_id":6,"Nazwa":"Samolot mechanik","url":"https://img.smyk.com/958x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/clementoni-laboratorium-mechaniki-samoloty-i-helikoptery-zestaw-konstrukcyjny-200-elementow-6090319.jpg","Cena":61.49,"Opis":"Laboratorium Mechaniki - Samoloty i helikoptery Clementoni to zestaw naukowy do odkrywania i eksperymentowania z mechaniką lotu. Odkryj tajniki aerodynamiki z Laboratorium Mechaniki!","Ofertaspecjalna":"false"};
localStorage.setItem("Produkt"+SamolotMechanik.Id,JSON.stringify(SamolotMechanik));

const RaspberryPi4B = {"Id":5,"category_id":7,"Nazwa":"Raspberry Pi 4 model B WiFi","url":"https://cdn3.botland.com.pl/68232-pdt_540/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg","Cena":279.00,"Opis":"Raspberry Pi w wersji 4 B z 4 GB pamięci RAM. Model wyposażony w dwa złącza microHDMI, dwa złącza USB 3.0 i 2 złącza USB 2.0 oraz złącze zasilania USB C. Płytka posiada również dwuzakresowe WiFi 2,4 GHz i 5 GHz, Bluetooth 5 / BLE, port Ethernet o prędkości do 1000 Mb/s oraz opcję zasilania przez PoE. Pozostałe elementy są identyczne jak w Raspberry Pi 3 B+.","Ofertaspecjalna":"false"};
localStorage.setItem("Produkt"+RaspberryPi4B.Id,JSON.stringify(RaspberryPi4B));

var Products = [AsusZenBookPro15,Teddybear,CityLineNewYorkCity,LegoWalkawKresie,SamolotMechanik,RaspberryPi4B]; 

class createProduct{
    savels(){
        var prod={"Id":parseInt(localStorage.getItem("product_id")),"category_id":parseInt(selectin.value),"url":zdj.value,"Cena":parseFloat(price.value),"Opis":textarea.value,"Nazwa":nameprod.value,"Ofertaspecjalna":s.value};
    
        localStorage.setItem("Produkt"+parseInt(localStorage.getItem("product_id")),JSON.stringify(prod));
        localStorage.setItem("product_id",parseInt(localStorage.getItem("product_id"))+1);
        window.location.href = "dodanyprodukt.html";
    }
}

function display_products(){
    var p = document.getElementById("products");
    for(let i = 0;i<parseInt(localStorage.getItem("product_id"));i++){
        var img = document.createElement("img");
        var nameimg = document.createElement("h3");
        var divogl = document.createElement("div"); 
        var div = document.createElement("div");
        var bt = document.createElement("button");
        var a = document.createElement("a");
        var obj = JSON.parse(localStorage.getItem("Produkt"+i));
        
        bt.innerHTML = "Dodaj do koszyka";
        bt.setAttribute("style","width:100px;height:50px;");
        bt.addEventListener("click",()=>{addingtobasket(JSON.parse(localStorage.getItem("koszykProdukt"+i)));});
        let l = obj.Cena;
        a.innerHTML = obj.Opis + "<br>" + parseFloat(l).toFixed(2) + "<br>";
        div.style.float = "right";
        nameimg.innerHTML = obj.Nazwa;
        img.src = obj.url;
        img.style.width = "300px";
        img.style.height = "300px";
        nameimg.setAttribute("style","width:100%;height:30%;");
        a.setAttribute("style","width:100%;height:70%;");
        divogl.style.display = "flex";
        img.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});
        nameimg.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});
        a.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});

        
        div.appendChild(nameimg);
        div.appendChild(a);
        div.appendChild(bt);
        divogl.appendChild(img);
        divogl.appendChild(div);
        p.appendChild(divogl);
    }
}

function wybor(){
    var pr = document.getElementById("sel").value;
    if(pr==0){
        var p = document.getElementById("products");
        p.innerHTML = "";
        var tab = new Array;
        for(let i =0; i<localStorage.getItem("product_id");i++){
            tab[i] = JSON.parse(localStorage.getItem("Produkt"+i));
        }
        var cenanajnizsza = _.sortBy(tab,"Cena");
        for(let i = 0;i<cenanajnizsza.length;i++){
            var img = document.createElement("img");
            var nameimg = document.createElement("h3");
            var divogl = document.createElement("div"); 
            var div = document.createElement("div");
            var bt = document.createElement("button");
            var a = document.createElement("a");
            var obj = cenanajnizsza[i];
            
            bt.innerHTML = "Dodaj do koszyka";
            bt.setAttribute("style","width:100px;height:50px;");
            bt.addEventListener("click",()=>{addingtobasket(JSON.parse(localStorage.getItem("koszykProdukt"+cenanajnizsza[i].Id)));});
            let l = obj.Cena;
            a.innerHTML = obj.Opis + "<br>" + parseFloat(l).toFixed(2) + "<br>";
            div.style.float = "right";
            nameimg.innerHTML = obj.Nazwa;
            img.src = obj.url;
            img.style.width = "300px";
            img.style.height = "300px";
            nameimg.setAttribute("style","width:100%;height:30%;");
            a.setAttribute("style","width:100%;height:70%;");
            divogl.style.display = "flex";
            img.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + cenanajnizsza[i].Id;});
            nameimg.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + cenanajnizsza[i].Id;});
            a.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + cenanajnizsza[i].Id;});

            
            div.appendChild(nameimg);
            div.appendChild(a);
            div.appendChild(bt);
            divogl.appendChild(img);
            divogl.appendChild(div);
            p.appendChild(divogl);
        }
    }
    if(pr==1){
        var p = document.getElementById("products");
        p.innerHTML = "";
        var tab = new Array;
        var j =parseInt(localStorage.getItem("product_id"))-1;
        for(let i =0; i<localStorage.getItem("product_id");i++){
            tab[i] = JSON.parse(localStorage.getItem("Produkt"+i));
        }
        var cenanajnizsza = _.sortBy(tab,"Cena");
        for(let i =0; i<localStorage.getItem("product_id");i++,j--){
            tab[i] = cenanajnizsza[j];
        }
        for(let i = 0;i<tab.length;i++){
            var img = document.createElement("img");
            var nameimg = document.createElement("h3");
            var divogl = document.createElement("div"); 
            var div = document.createElement("div");
            var bt = document.createElement("button");
            var a = document.createElement("a");
            var obj = tab[i];
            
            bt.innerHTML = "Dodaj do koszyka";
            bt.setAttribute("style","width:100px;height:50px;");
            bt.addEventListener("click",()=>{addingtobasket(JSON.parse(localStorage.getItem("koszykProdukt"+tab[i].Id)));});
            let l = obj.Cena;
            a.innerHTML = obj.Opis + "<br>" + parseFloat(l).toFixed(2) + "<br>";
            div.style.float = "right";
            nameimg.innerHTML = obj.Nazwa;
            img.src = obj.url;
            img.style.width = "300px";
            img.style.height = "300px";
            nameimg.setAttribute("style","width:100%;height:30%;");
            a.setAttribute("style","width:100%;height:70%;");
            divogl.style.display = "flex";
            img.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + tab[i].Id;});
            nameimg.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + tab[i].Id;});
            a.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + tab[i].Id;});

            
            div.appendChild(nameimg);
            div.appendChild(a);
            div.appendChild(bt);
            divogl.appendChild(img);
            divogl.appendChild(div);
            p.appendChild(divogl);
        }
    }
}

var tab = new Array;
for(let i =0; i<localStorage.getItem("product_id");i++){
    tab[i] = JSON.parse(localStorage.getItem("Produkt"+i)).Nazwa;
}

function search(){
    var val = searchinput.value.toLocaleLowerCase();
    let r = tab;
    r = r.filter(tab => tab.toLocaleLowerCase().includes(val));
    var p = document.getElementById("products");
    p.innerHTML = "";
    for(let i = 0;i<parseInt(localStorage.getItem("product_id"));i++){
        for(let j=0;j<r.length;j++)
        {
            if(r[j] == JSON.parse(localStorage.getItem("Produkt"+i)).Nazwa){
                var img = document.createElement("img");
                var nameimg = document.createElement("h3");
                var divogl = document.createElement("div"); 
                var div = document.createElement("div");
                var bt = document.createElement("button");
                var a = document.createElement("a");
                var obj = JSON.parse(localStorage.getItem("Produkt"+i));
                
                bt.innerHTML = "Dodaj do koszyka";
                bt.setAttribute("style","width:100px;height:50px;");
                bt.addEventListener("click",()=>{addingtobasket(JSON.parse(localStorage.getItem("koszykProdukt"+i)));});
                let l = obj.Cena;
                a.innerHTML = obj.Opis + "<br>" + parseFloat(l).toFixed(2) + "<br>";
                div.style.float = "right";
                nameimg.innerHTML = obj.Nazwa;
                img.src = obj.url;
                img.style.width = "300px";
                img.style.height = "300px";
                nameimg.setAttribute("style","width:100%;height:30%;");
                a.setAttribute("style","width:100%;height:70%;");
                divogl.style.display = "flex";
                img.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});
                nameimg.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});
                a.addEventListener("click",()=>{window.location.href = "clickprod.html?produkt=" + JSON.parse(localStorage.getItem("Produkt"+i)).Id;});

                
                div.appendChild(nameimg);
                div.appendChild(a);
                div.appendChild(bt);
                divogl.appendChild(img);
                divogl.appendChild(div);
                p.appendChild(divogl);
            }
        }
        
    }
}

var c = new createProduct();
if(btadd)
{
    btadd.addEventListener("click",()=>{
    c.savels();
    });
}
