// Put your application javascript here

// fonction douverture et fermeture du menu en forma mobile
function OpenMenu() {
    const menu = document.querySelector('.link');
    const icon = document.querySelector(".icon");
    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        menu.style.display = "block";
    }else{
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
        menu.style.display = "none";
    }

    
}
// fin fonction

//fin slick caroussel


