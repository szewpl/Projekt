const Menu = {
    logo:{
        id: 1,
        name: "Sklep z zabawkami 🧸",
    },
    specialoffers:{
        id:2,
        name: "Oferty specjalne",
    },
    useraccount:{
        id:3,
        name: "Konto użytkownika",
    },

};

const select = {
    0:{
        id:0,
        name:"Cena od najmniejszej"
    },
    1:{
        id:1,
        name:"Cena od najwiekszej"
    },
}






//document.querySelector("body").style.backgroundColor = "#303030";
document.getElementById('useraccount').addEventListener('click',()=>{window.location.href = "form_account.html";});
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let specialoffers = document.getElementById("specialoffers");
let useraccount = document.getElementById("useraccount");


logo.innerHTML = Menu.logo.name;
logo.setAttribute('style','width:33.33%;text-align:center;border-right:5px solid white;');
logo.addEventListener('click',()=>{window.location.href = "index.html"});
specialoffers.innerHTML = Menu.specialoffers.name;
specialoffers.setAttribute('style','width:33.33%;text-align:center;border-right:5px solid white;');
useraccount.innerHTML = Menu.useraccount.name;
useraccount.setAttribute('style','width:33.33%;text-align:center;');

menu.setAttribute('style','background-color: #ff3333;display:flex;height:65px;color:white;font-size:32px;line-height: 65px;cursor:pointer;margin-bottom:10px;');


var wysz = document.getElementById("wysz");
var sel = document.createElement("select");
if(wysz){
    sel.id = "sel";

    for(let i=0;i<2;i++)
    {
            var option = document.createElement("option");
            option.text = select[i].name;
            option.value = select[i].id;
            sel.add(option);
    }
    sel.addEventListener("change",()=>{wybor();});
    wysz.appendChild(sel);
}


var searchinput = document.getElementById("wyszukiwarka");
if(searchinput){
    searchinput.addEventListener("input",()=>{search();});
}