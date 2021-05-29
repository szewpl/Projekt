var addprod = document.getElementById('addproduct');

addprod.setAttribute('style','border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');


var addprods = document.getElementById("addproducts");
var select = document.getElementById("addselect");
var zdj = document.getElementById("url");
var price = document.getElementById("price");
var textarea = document.getElementById("textarea");
var btadd = document.getElementById("addprod");
var nameprod = document.getElementById("name");
const description = {};
var counter = 0;

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
    savels(){
        if(localStorage.getItem("product_id") == null)
        {
            localStorage.setItem("product_id",0);
        }else{
            localStorage.setItem("product_id",parseInt(localStorage.getItem("product_id"))+1);
        }
        const prod = {"Id":parseInt(localStorage.getItem("product_id")),"Id kategori":select.value,"Img":zdj.value,"Cena":price.value,"Krótki opis":textarea.value,"Nazwa":nameprod.value};
        console.log(prod);
        
        var o = JSON.stringify(prod);
        var name = "Produkt"+parseInt(localStorage.getItem("product_id"));
        document.cookie = "Name="+name+";"+"Value="+o+";";
        location.reload();
    }
    
}
var c = new createProduct();
btadd.addEventListener("click",()=>{
    c.savels();
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