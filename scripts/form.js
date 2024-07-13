//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;

//add options
function addOptions() {
    const products = [
        {
            id: "fc - 1888",
            name: "flux capacitor",
            averagerating: 4.5,
        },
        {
            id: "fc - 2050",
            name: "power laces",
            averagerating: 4.7,
        },
        {
            id: "fs - 1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac - 2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj - 1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    var selectElement = document.getElementById('product');

    products.forEach(function (option) {
        var newOption = document.createElement("option");
        newOption.value = option.id;
        newOption.text = option.name;
        selectElement.appendChild(newOption);
    });
}

addOptions();

document.addEventListener("DOMContentLoaded", function () {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    const reviewCountElement = document.getElementById('reviewCounter');
    if (reviewCountElement) {
        reviewCountElement.textContent = `${reviewCount}`;
    } else {
        console.error('Element with ID "reviewCounter" not found.');
    }
});


