var addprod = document.getElementById('addproduct');

addprod.setAttribute('style', 'border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');


var k = document.getElementsByClassName("keys");
var v = document.getElementsByClassName("values");
var addprods = document.getElementById("addproducts");
var select = document.getElementById("addselect");
var zdj = document.getElementById("url");
var price = document.getElementById("price");
var textarea = document.getElementById("textarea");
var btadd = document.getElementById("addprod");
const description = {};
var counter = 0;

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

    keys.classList.add("keys");
    values.classList.add("values");
    keys.placeholder = "Nazwa dany";
    values.placeholder = "Wartosc danej";

    addprods.appendChild(keys);
    addprods.appendChild(values);
    addprods.appendChild(br);
    counter++;
}

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
console.log(JSON.parse(localStorage.getItem("produkt")));*/