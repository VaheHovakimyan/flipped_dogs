const burger = document.getElementById("burger");
const menu = document.getElementById("menu");


let burger_bool = false;

function Burger(){

    burger_bool = !burger_bool;
    console.log(burger_bool);

    if(burger_bool){
        document.body.style.overflow = "hidden";
        menu.style.display = "flex";
    }else{
        document.body.style.overflow = "auto";
        menu.style.display = "none";
    }
    
}

// Burger();