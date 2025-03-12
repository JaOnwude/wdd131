// const footer = document.querySelector('footer');
// const div = document.querySelector('div')

// const today = Date()
// footer.innerHTML = `&copy; ${today.getFullYear()}`
// div.innerText = `Last Modified: ${ Date().getFullYear}`;

const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const mainNav = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('#menu');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`


hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
});