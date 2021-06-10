const Menu = {
    logo: {
        id: 1,
        name: "Sklep z zabawkami 🧸",
    },
    specialoffers: {
        id: 2,
        name: "Oferty specjalne",
    },
    useraccount: {
        id: 3,
        name: "Konto użytkownika",
    },
    darkmode: {
        id: 4,
        name: ["🌙", "☀️"],
    },

};

const select = {
    0: {
        id: 0,
        name: "Cena od najmniejszej"
    },
    1: {
        id: 1,
        name: "Cena od najwiekszej"
    },
}



for (let i = 0; i < localStorage.getItem("product_id"); i++) {
    if (localStorage.getItem("koszykProdukt" + i) == null) {
        var obj = JSON.parse(localStorage.getItem("Produkt" + i));
        obj["ilosc"] = 0;
        obj["Cena"] = 0;
        localStorage.setItem("koszykProdukt" + i, JSON.stringify(obj));
    }
}

if (localStorage.getItem("konto") == null) {
    localStorage.setItem("konto", 0);
}


//document.querySelector("body").style.backgroundColor = "#303030";
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let specialoffers = document.getElementById("specialoffers");
let useraccount = document.getElementById("useraccount");
let dmode = document.getElementById("darkmode");
specialoffers.addEventListener("click", () => { window.location.href = "ofertyspecjalne.html" });


logo.innerHTML = Menu.logo.name;
logo.setAttribute('style', 'width:32%;text-align:center;border-right:5px solid white;');
logo.addEventListener('click', () => { window.location.href = "index.html" });
specialoffers.innerHTML = Menu.specialoffers.name;
specialoffers.setAttribute('style', 'width:32%;text-align:center;border-right:5px solid white;');
useraccount.innerHTML = Menu.useraccount.name;
useraccount.setAttribute('style', 'width:32%;text-align:center;');
dmode.innerHTML = Menu.darkmode.name[0];
dmode.setAttribute('style', 'width: 4%; text-align:center; border-left:5px solid white;');

menu.setAttribute('style', 'background-color: #ff3333;display:flex;height:65px;color:white;font-size:32px;line-height: 65px;cursor:pointer;margin-bottom:10px;');


var wysz = document.getElementById("wysz");
var sel = document.createElement("select");
if (wysz) {
    sel.id = "sel";
    for (let i = 0; i < 2; i++) {
        var option = document.createElement("option");
        option.text = select[i].name;
        option.value = select[i].id;

        sel.add(option);
    }
    sel.addEventListener("click", () => { wybor(); });
    wysz.appendChild(sel);
}

sel.setAttribute('style', 'margin: 0 10px 5px 10px; border: 1px solid #ff3333;');

var searchinput = document.getElementById("wyszukiwarka");
if (searchinput) {
    searchinput.addEventListener("input", () => { search(); });
}

if (localStorage.getItem("ilosczkoszyka") == null) {
    localStorage.setItem("ilosczkoszyka", 0);
}

var divbasket = document.createElement("div");

divbasket.setAttribute('style', 'margin: 0 10px 5px 10px; border:1px solid #ff3333; padding: 0 5px')

function addingtobasket(obj) {
    localStorage.setItem("ilosczkoszyka", (parseInt(localStorage.getItem("ilosczkoszyka"))) + 1);
    obj["ilosc"] = obj["ilosc"] + 1;
    obj["Cena"] = obj["Cena"] + JSON.parse(localStorage.getItem("Produkt" + obj.Id)).Cena;
    localStorage.setItem("koszykProdukt" + obj.Id, JSON.stringify(obj));

    divbasket.innerHTML = "Koszyk: " + localStorage.getItem("ilosczkoszyka");
    if (wysz) {
        wysz.appendChild(divbasket);
    }
}

function deletepr(obj) {
    localStorage.setItem("ilosczkoszyka", (parseInt(localStorage.getItem("ilosczkoszyka"))) - 1);
    obj["ilosc"] = obj["ilosc"] - 1;
    obj["Cena"] = obj["Cena"] - JSON.parse(localStorage.getItem("Produkt" + obj.Id)).Cena;
    localStorage.setItem("koszykProdukt" + obj.Id, JSON.stringify(obj));

    divbasket.innerHTML = "Koszyk: " + localStorage.getItem("ilosczkoszyka");
    if (wysz) {
        wysz.appendChild(divbasket);
    }
}

function deleteprallf(obj) {
    localStorage.setItem("ilosczkoszyka", (parseInt(localStorage.getItem("ilosczkoszyka"))) - obj.ilosc);
    obj["ilosc"] = obj["ilosc"] - obj.ilosc;
    obj["Cena"] = 0;
    localStorage.setItem("koszykProdukt" + obj.Id, JSON.stringify(obj));

    divbasket.innerHTML = "Koszyk: " + localStorage.getItem("ilosczkoszyka");
    if (wysz) {
        wysz.appendChild(divbasket);
    }
}

divbasket.addEventListener("click", () => { window.location.href = "displaybasket.html"; });
divbasket.innerHTML = "Koszyk: " + localStorage.getItem("ilosczkoszyka");

if (wysz) {
    wysz.appendChild(divbasket);
}

if (sessionStorage.getItem("zalogowanyjako") != null) {
    useraccount.innerHTML = '\xa0 Witaj, ' + sessionStorage.getItem("zalogowanyjako");
    useraccount.addEventListener("click", () => {
        if (confirm("Czy chcesz sie wylogowac?")) {
            sessionStorage.removeItem("zalogowanyjako");
            window.location.reload();
        }
    });
} else {
    document.getElementById('useraccount').addEventListener('click', () => { window.location.href = "form_account.html"; });
}

if (sessionStorage.getItem("zalogowanyjako") == "admin") {
    var bt = document.createElement("button");

    bt.innerHTML = "Stworz produkt";
    bt.addEventListener("click", () => { window.location.href = "creator.html" });

    if (wysz) {
        wysz.appendChild(bt);
    }
}


dmode.addEventListener('click', (e) => {
    if (dmode.textContent == Menu.darkmode.name[0])
        dmode.innerHTML = Menu.darkmode.name[1];
    else
        dmode.innerHTML = Menu.darkmode.name[0];
    const darkMode = document.body.classList.toggle('dark-mode');
    e.target.blur();
    localStorage.setItem('dark-mode', darkMode);
});

if (JSON.parse(localStorage.getItem('dark-mode'))) {
    document.body.classList.add('dark-mode');
}