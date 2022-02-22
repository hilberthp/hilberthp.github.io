const toggleBtn = document.getElementsByClassName("nav-toggle")[0];
const navLinks = document.getElementsByClassName("nav-links");

toggleBtn.addEventListener('click', function () {
    for(let i = 0; i < navLinks.length; i++)
    navLinks[i].classList.toggle('active')
});