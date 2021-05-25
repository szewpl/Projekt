var addprod = document.getElementById('addproduct');

addprod.setAttribute('style','border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');

var select = document.createElement("select");
for(let i=0;i<Categories.length;i++)
{
    if(Categories[i].parent_id>0){
        var option = document.createElement("option");
        option.text = Categories[i].name;
        select.add(option);
    }
}

addprod.appendChild(select);
select.addEventListener("change",()=>{console.log(select.value);});

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