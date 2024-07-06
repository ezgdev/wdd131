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

// array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 17706,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg"
    },
    {
        templeName: "Asuncion Paraguay",
        location: "Asuncion, Paraguay",
        dedicated: "2002, May, 19",
        area: 10710,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
    },

];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// filter temples when clicked in the navigation menu
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        // Split the dedicated string into an array [YYYY, Month, DD]
        const [year, month, day] = temple.dedicated.split(", ");

        // Create a new Date object using the year, month, and day
        const dedicatedDate = new Date(`${year}-${month}-${day}`);

        // Return true if the year is before 1900
        return dedicatedDate.getFullYear() <= 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        // Split the dedicated string into an array [YYYY, Month, DD]
        const [year, month, day] = temple.dedicated.split(", ");

        // Create a new Date object using the year, month, and day
        const dedicatedDate = new Date(`${year}-${month}-${day}`);

        // Return true if the year is after 2000
        return dedicatedDate.getFullYear() >= 2000;
    }));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area >= 90000));
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area <= 10000));
})


// change the title of the page when the page is changed
document.addEventListener('DOMContentLoaded', () => {
    // Select h2 in main
    const mainTitle = document.getElementById('mainTitle');

    // Select all links
    const links = document.querySelectorAll('.navigation a');

    // Add an event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Gets the new title from the link's data-title attribute
            const newTitle = link.getAttribute('data-title');

            // Change the h2 text
            mainTitle.textContent = newTitle;
        });
    });
});

// create temple cards
function createTempleCard(filteredTemples) {
    document.querySelector(".temple-cards-container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Decicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-cards-container").appendChild(card);
    });
}