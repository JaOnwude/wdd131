const footer = document.querySelector('footer');
const div = document.querySelector('div')

const today = Date()
footer.innerHTML = `&copy; ${today.getFullYear()}`
div.innerText = `Last Modified: ${ Date().getFullYear}`;
