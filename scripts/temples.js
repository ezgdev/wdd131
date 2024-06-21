//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;


//add event listener to menu button and nav links
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});