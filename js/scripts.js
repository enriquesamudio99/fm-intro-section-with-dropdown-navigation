const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const navbarNav = document.getElementById('navbarNav');
const overlay = document.getElementById('overlay');
const linksDropdown = document.querySelectorAll('.nav__link.dropdown');

document.addEventListener("DOMContentLoaded", () => {

    linksDropdown.forEach(linkDropdown => {
        linkDropdown.addEventListener("click", toggleDropdownMenu);
    });

    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

});

function openMenu() {

    navbarNav.classList.add("navbar__nav--open");
    overlay.classList.add("overlay--show");

}

function closeMenu() {

    navbarNav.classList.remove("navbar__nav--open");
    overlay.classList.remove("overlay--show");

}

function toggleDropdownMenu(e) {

    const navLink = e.target;

    navLink.classList.toggle("nav__link--open");

    // Dropdown Container
    const dropdown = navLink.nextElementSibling;
    const actualHeightDropdown = dropdown.scrollHeight;

    if(!dropdown.style.maxHeight) {
        dropdown.style.maxHeight = `${actualHeightDropdown}px`;
    } else {
        dropdown.style.maxHeight = null;
    }

    linksDropdown.forEach(navLink => {
        if (navLink !== e.currentTarget) {
            navLink.classList.remove("nav__link--open");
            navLink.nextElementSibling.style.maxHeight = null;
        }
    });

} 