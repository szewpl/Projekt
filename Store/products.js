var btadd = document.getElementById("addprod");

addprod.setAttribute('style', 'border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');

const Teddybear = { "Id": 1, "category_id": 2, "Nazwa": "Miś maskotka", "url": "https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/teddykompaniet-love-maskotka-mis-szary-20-cm-6661958.jpg", "Cena": 25.99, "Opis": "Mięciutki miś idealnie nadaje się do zabawy oraz do przytulenia podczas snu. Przeznaczony dla dzieci 0+.", };
localStorage.setItem("Produkt" + Teddybear.Id, JSON.stringify(Teddybear));

const CityLineNewYorkCity = { "Id": 2, "category_id": 3, "Nazwa": "City Line New York City", "url": "https://img.smyk.com/1920x/filters:no_upscale()/https://beta-cdn.smyk.com/media/product/1600/1/dante-city-line-new-york-city-puzzle-3d-6390154.jpg", "Cena": 45.99, "Opis": "Puzzle 3D to pasjonująca zabawa dla dzieci i dla dorosłych. W opakowaniu znajduje się 123 puzzli, wykonanych ze specjalnego materiału przypominającego piankę." };
localStorage.setItem("Produkt" + CityLineNewYorkCity.Id, JSON.stringify(CityLineNewYorkCity));

for (let i = 0; i < Categories.length; i++) {
    if (Categories[i].parent_id > 0) {
        var option = document.createElement("option");
        option.text = Categories[i].name;
        option.value = Categories[i].id;
        select.add(option);
    }
}

function addinputs() {
    var keys = document.createElement('input');
    var values = document.createElement('input');
    var br = document.createElement('br');

    const RaspberryPi4B = { "Id": 5, "category_id": 7, "Nazwa": "Raspberry Pi 4 model B WiFi DualBand Bluetooth 4GB RAM 1,5GHz", "url": "https://cdn3.botland.com.pl/68232-pdt_540/raspberry-pi-4-model-b-wifi-dualband-bluetooth-4gb-ram-15ghz.jpg", "Cena": 279.00, "Opis": "Raspberry Pi w wersji 4 B z 4 GB pamięci RAM. Model wyposażony w dwa złącza microHDMI, dwa złącza USB 3.0 i 2 złącza USB 2.0 oraz złącze zasilania USB C. Płytka posiada również dwuzakresowe WiFi 2,4 GHz i 5 GHz, Bluetooth 5 / BLE, port Ethernet o prędkości do 1000 Mb/s oraz opcję zasilania przez PoE. Pozostałe elementy są identyczne jak w Raspberry Pi 3 B+." };
    localStorage.setItem("Produkt" + RaspberryPi4B.Id, JSON.stringify(RaspberryPi4B));

    var Products = [AsusZenBookPro15, Teddybear, CityLineNewYorkCity, LegoWalkawKresie, SamolotMechanik, RaspberryPi4B];

    class createProduct {
        dodajopis() {
            for (let i = 0; i < k.length; i++) {
                description[k[i].value] = v[i].value;
            }
        }
        savels() {
            /*if(localStorage.getItem("product_id") == null)
            {
                localStorage.setItem("product_id",0);
            }else{
                id = localStorage.setItem("product_id",parseInt(localStorage.getItem("product_id"))+1);
            }*/
            const prod = { "Id": parseInt(localStorage.getItem("product_id")), "Id kategori": select.value, "Img": zdj.value, "Cena": price.value, "Krótki opis": textarea.value, "Dane techniczne": description };
            console.log(prod);


            //localStorage.setItem("Produkt"+parseInt(localStorage.getItem("product_id")),);
        }

    }
    var c = new createProduct();
    btadd.addEventListener("click", () => {
        c.dodajopis();
        c.savels();
    });

    function display_products() {
        var p = document.getElementById("products");
        for (let i = 0; i < parseInt(localStorage.getItem("product_id")); i++) {
            var img = document.createElement("img");
            var nameimg = document.createElement("h3");
            var divogl = document.createElement("div");
            var div = document.createElement("div");
            var a = document.createElement("a");
            var obj = JSON.parse(localStorage.getItem("Produkt" + i));

            let l = obj.Cena;
            a.innerHTML = obj.Opis + "<br>" + parseFloat(l).toFixed(2);
            div.style.float = "right";
            div.setAttribute('style', "margin-left:auto;margin-right:auto;");
            nameimg.innerHTML = obj.Nazwa;
            img.src = obj.url;
            img.style.width = "300px";
            img.style.height = "300px";

            div.appendChild(a);
            divogl.appendChild(nameimg);
            divogl.appendChild(img);
            divogl.appendChild(div);
            p.appendChild(divogl);
        }
    }

    if (sessionStorage.getItem("textareaValue") !== null) {
        textarea.value = sessionStorage.getItem("textareaValue");
    }


    textarea.addEventListener("input", e => {
        sessionStorage.setItem("textareaValue", textarea.value);
    });

    if (sessionStorage.getItem("selectValue") !== null) {
        select.value = sessionStorage.getItem("selectValue");
    }


    select.addEventListener("input", e => {
        sessionStorage.setItem("selectValue", select.value);
    });

    if (sessionStorage.getItem("selectValue") !== null) {
        select.value = sessionStorage.getItem("selectValue");
    }


    select.addEventListener("input", e => {
        sessionStorage.setItem("selectValue", select.value);
    });

    /*if(localStorage.getItem("product_id") == null){
        localStorage.setItem("product_id",0);
    }else{
        localStorage.setItem("product_id",parseInt( localStorage.getItem("product_id"))+1);
    }*/
    /*var prod = new Array(0);
    var des = new Array(0);
    prod[0] = {"es":"elo","jd":"kurwe"};
    localStorage.setItem("produkt",JSON.stringify(prod[0]));
    console.log(JSON.parse(localStorage.getItem("produkt")));