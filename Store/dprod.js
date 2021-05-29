var addprod = document.getElementById('addproduct');

addprod.setAttribute('style','border-top:2px solid #ff3333;width:75%;margin-left:auto;margin-right:auto;border-bottom:2px solid #ff3333;');


var addprods = document.getElementById("addproducts");
var select = document.getElementById("addselect");
var zdj = document.getElementById("url");
var price = document.getElementById("price");
var textarea = document.getElementById("textarea");
var nameprod = document.getElementById("name");

for(let i=0;i<Categories.length;i++)
{
    if(Categories[i].parent_id>0){
        var option = document.createElement("option");
        option.text = Categories[i].name;
        option.value = Categories[i].id;
        select.add(option);
    }
}