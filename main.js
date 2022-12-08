let nav = document.querySelector('.navbar');
window.onscroll = () =>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("headerScrolled");
    }
    else{
        nav.classList.remove("headerScrolled");
    }

}