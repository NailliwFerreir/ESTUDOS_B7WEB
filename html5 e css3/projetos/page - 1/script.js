window.onload = function (){
    document.querySelector(".container-nav-menu-mobile").addEventListener("click", function(){
        console.log("Clicou no menu-mobile");
        if( document.querySelector(".container-nav-menu nav ul").style.display=='flex'){
            document.querySelector(".container-nav-menu nav ul").style.display='none';
        }else{
            document.querySelector(".container-nav-menu nav ul").style.display='flex';
        }
    })
}