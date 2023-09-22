const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menu_div = document.getElementById("menu_div");

const welcome_first_button = document.getElementById("welcome_mobile_first_button");
const welcome_second_button = document.getElementById("welcome_mobile_second_button");
const welcome_left_part = document.getElementById("welcome_left_part");
const welcome_right_part = document.getElementById("welcome_right_part");

let burger_bool = false;

/* Second slider */

const left_arrow = document.getElementById("left_arrow");
const right_arrow = document.getElementById("right_arrow");

const pic1 = document.getElementById("show_dogs_item_first");
const pic2 = document.getElementById("show_dogs_item_second");
const pic3 = document.getElementById("show_dogs_item_third");
const pic4 = document.getElementById("show_dogs_item_fourth"); 


let index = 0;

let arr = [pic1, pic2, pic3, pic4];


function Burger(){

    burger_bool = !burger_bool;

    if(burger_bool){
        document.body.style.overflow = "hidden";
        menu_div.style.right = "0%";
        menu.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        // menu.style.height = "100%";
        menu.style.visibility = "visible";
        // menu.style.display = "flex";
    }else{
        document.body.style.overflow = "auto";
        menu_div.style.right = "-100%";
        menu.style.backgroundColor = "rgba(0, 0, 0, 0)";
        // menu.style.height = "0%";
        menu.style.visibility = "hidden";
        // menu.style.display = "none";
    }
    
}

// Burger();

let part_slide_bool = false;

function PartSlide(){

    part_slide_bool = !part_slide_bool;

    if(part_slide_bool){

        welcome_first_button.src = "./pics/icons/welcome/mobile_slide_unactive_button.svg";
        welcome_second_button.src = "./pics/icons/welcome/mobile_slide_active_button.svg";

        welcome_left_part.style.display = "none";
        welcome_right_part.style.display = "flex";
    }else{

        welcome_second_button.src = "./pics/icons/welcome/mobile_slide_unactive_button.svg";
        welcome_first_button.src = "./pics/icons/welcome/mobile_slide_active_button.svg";

        welcome_left_part.style.display = "flex";
        welcome_right_part.style.display = "none";
    }
}


/* Second Slider */

/* Display new image function */

function Display(){
    arr.map((item, i) => {
        if(i === index){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    })
}

/* Previous image function */

function Prev(){

    if(index === 0){
        index = arr.length - 1;
    }else{
        index--;
    }

    Display();
}

left_arrow.addEventListener("click", Prev);


/* Next image function */

function Next(){

    if(index === arr.length - 1){
        index = 0;
    }else{
        index++;
    }

    Display();
}

right_arrow.addEventListener("click", Next);