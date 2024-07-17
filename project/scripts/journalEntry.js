

document.getElementById('entryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    //get entry form data
    const date = document.getElementById('date').value;
    const years2 = document.getElementById('years2').value;
    const months2 = document.getElementById('months2').value;
    const weight2 = document.getElementById('weight2').value;
    const height2 = document.getElementById('height2').value;
    const indications = document.getElementById('indications').value;


    //save information in localstorage
    localStorage.setItem('date', date);
    localStorage.setItem('years2', years2);
    localStorage.setItem('months2', months2);
    localStorage.setItem('weight2', weight2);
    localStorage.setItem('height2', height2);
    localStorage.setItem('indications', indications);
});

//get data from localstorage
const date = localStorage.getItem('date');
const years2 = localStorage.getItem('years2');
const months2 = localStorage.getItem('months2');
const weight2 = localStorage.getItem('weight2');
const height2 = localStorage.getItem('height2');
const indications = localStorage.getItem('indications');

//show data
document.getElementById('date').value = date;
if (years2 != 0) {
    document.getElementById('age2').textContent = `Age: ${years2} years and ${months2} months`;
} else {
    document.getElementById('age2').textContent = `Age: ${months2} months`
}