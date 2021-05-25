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
    }
};







document.getElementById('useraccount').addEventListener('click',()=>{window.location.href = "form_account.html";});
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let specialoffers = document.getElementById("specialoffers");
let useraccount = document.getElementById("useraccount");

logo.innerHTML = Menu.logo.name;
logo.setAttribute('style','width:33.33%;text-align:center;border-right:5px solid #303030;');
logo.addEventListener('click',()=>{window.location.href = "index.html"});
specialoffers.innerHTML = Menu.specialoffers.name;
specialoffers.setAttribute('style','width:33.33%;text-align:center;border-right:5px solid #303030;');
useraccount.innerHTML = Menu.useraccount.name;
useraccount.setAttribute('style','width:33.33%;text-align:center;');

menu.setAttribute('style','background-color: #ff3333;display:flex;height:65px;color:white;font-size:32px;line-height: 65px;cursor:pointer;margin-bottom:10px;');