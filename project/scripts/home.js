//add content to footer
const year = new Date().getFullYear();
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;

//add event listener to menu button and nav links
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});


document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    //get form data
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const years = document.getElementById('years').value;
    const months = document.getElementById('months').value;

    //save information in localstorage
    localStorage.setItem('name', name);
    localStorage.setItem('weight', weight);
    localStorage.setItem('height', height);
    localStorage.setItem('years', years);
    localStorage.setItem('months', months);

    //redirect to destination page
    window.location.href = 'journal.html';
});

