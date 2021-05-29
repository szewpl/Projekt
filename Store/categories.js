const Categories = [
    {id:1,parent_id:0,name:"Zabawki","Dane techniczne":desc},
    {id:2,parent_id:1,name:"Pluszaki"},
    {id:3,parent_id:1,name:"Puzzle"},
    {id:4,parent_id:1,name:"Klocki"},
    {id:5,parent_id:0,name:"Narzędzia"},
    {id:6,parent_id:5,name:"Mały mechanik"},
    {id:7,parent_id:5,name:"Mały programista"},
    {id:8,parent_id:5,name:"Laptopy"},
];

const desc = [
    ["Procesor","elo"],
];

function display_categories(){
    for(let i=0;i<Categories.length;i++)
    {
        var div = document.getElementById("categories");
        var a = document.createElement("a");
        a.innerHTML = Categories[i].name + "<br>";
        div.appendChild(a);
        if(Categories[i].parent_id > 0 && Categories[i].parent_id != 10)
        {
            a.style.marginLeft = "30px";
        }
    }
}