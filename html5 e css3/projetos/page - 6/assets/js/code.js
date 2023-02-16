window.onload = function (){
    document.querySelector(".menu .menu-opener").addEventListener("click", function(){
        console.log("Clicou no menu-mobile");
        if( document.querySelector("nav").style.display=='flex'){
            document.querySelector("nav").style.display='none';
        }else{
            document.querySelector("nav").style.display='flex';
        }
    })
}