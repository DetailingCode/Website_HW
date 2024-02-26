document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)


})


<<<<<<< HEAD
handleCurrentYear();


=======
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon');
    })
}
 
showMenu('nav-toggle','nav-menu');
>>>>>>> f7d80d2ecdf4d3ebe732c2631d32701a1d8b3d9d
