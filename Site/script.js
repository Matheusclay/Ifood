let listras = document.querySelector("#listras");
let menu = document.querySelector("#menu");
let itens = document.querySelectorAll(".item");

function abrirMenu(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        listras.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>"
    }

    else{
        menu.classList.add("active");
        listras.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

listras.addEventListener("click", abrirMenu);

function abrirSubMenu(){
    if (this.classList.contains("submenu-active")){
        this.classList.remove("submenu-active");
    } else if(menu.querySelector(".submenu-active")){ /*no querySelector deve informar se é classe ou id*/
        menu.querySelector(".submenu-active").classList.remove("submenu-active"); /*classlist é sempre para classe*/
        this.classList.add("submenu-active");
    }
    
    else{
        this.classList.add("submenu-active");
    }
}

for (let item of itens){
    if (item.querySelector(".submenu")){
        item.addEventListener("click", abrirSubMenu);
    }
}