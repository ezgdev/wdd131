//get data from localstorage
const name = localStorage.getItem('name');
const weight = localStorage.getItem('weight');
const height = localStorage.getItem('height');
const years = localStorage.getItem('years');
const months = localStorage.getItem('months');

//convert string to number
const weightNumber = parseFloat(weight);
const heightNumber = parseFloat(height);
const yearsNumber = parseInt(years);
const monthsNumber = parseInt(months);

//calculate body mass index
const bmi = weightNumber / ((heightNumber / 100) ** 2);

//show data 
document.getElementById('name').textContent = name;
document.getElementById('weight').innerHTML = `Weight: ${weightNumber} kg`;
document.getElementById('height').textContent = `Height: ${heightNumber} cm`;

if (yearsNumber != 0) {
    document.getElementById('age').textContent = `Age: ${yearsNumber} years and ${months} months`;
} else {
    document.getElementById('age').textContent = `Age: ${months} months`
}

document.getElementById('bmi').textContent = `BMI: ${bmi.toFixed(2)}`;






