var element = document.getElementsByClassName("bar-menu")[0];

element.addEventListener("click", function(){
    const navMenu = document.getElementById('NavMenu')
    navMenu.classList.toggle("active")
});
