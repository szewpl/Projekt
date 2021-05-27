var addprod = document.getElementById('addproduct');

addprod.setAttribute('style','border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');

var select = document.createElement("select");
var labelsel = document.createElement("label");
var zdj = document.createElement("input");
var labelprice = document.createElement("label");
var price = document.createElement("input");
var btadd = document.getElementById("addprod");
var shortdes = document.createElement("input");
var description = [];

price.type = "number";
shortdes.type = "text";
labelprice.innerText = "wpisz cene";
zdj.type = "url";
zdj.placeholder = "Wpisz adres do obrazu";
labelsel.innerHTML = "Kategoria";

for(let i=0;i<Categories.length;i++)
{
    if(Categories[i].parent_id>0){
        var option = document.createElement("option");
        option.text = Categories[i].name;
        option.value = Categories[i].id;
        select.add(option);
    }
}


class createProduct{
    dodajopis(){
        description.push({"elo":"elo"});
    }
    savels(){
        /*if(localStorage.getItem("product_id") == null)
        {
            localStorage.setItem("product_id",0);
        }else{
            id = localStorage.setItem("product_id",parseInt(localStorage.getItem("product_id"))+1);
        }*/
        var prod = [{"Id":parseInt(localStorage.getItem("product_id")),"Id kategori":select.value,"Img":zdj.value,"Cena":price.value,"Description":description,"Krótki opis":2}];
        console.log(prod);
        
        //localStorage.setItem("Produkt"+parseInt(localStorage.getItem("product_id")),);
    }
    
}

var c = new createProduct();
btadd.addEventListener("click",()=>{c.savels();c.dodajopis()});

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