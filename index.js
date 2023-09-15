const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

const welcome_first_button = document.getElementById("welcome_mobile_first_button");
const welcome_second_button = document.getElementById("welcome_mobile_second_button");
const welcome_left_part = document.getElementById("welcome_left_part");
const welcome_right_part = document.getElementById("welcome_right_part");

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

// menu.addEventListener("click", Burger);

// Burger();

let part_slide_bool = false;

function PartSlide(){

    part_slide_bool = !part_slide_bool;

    if(part_slide_bool){
        welcome_left_part.style.display = "none";
        welcome_right_part.style.display = "flex";
    }else{
        welcome_left_part.style.display = "flex";
        welcome_right_part.style.display = "none";
    }
}