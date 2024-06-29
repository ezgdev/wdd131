//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Ezequiel Gimenez - Rosario, Argentina.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;


//windchill function
const temp = 9; //temperature in °C
const wind = 13; //windspeed in km/h

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind >= 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    } else {
        return "N/A";
    }

}

const windchill = calculateWindChill(temp, wind);

if (typeof windchill === "number") {
    document.getElementById("result").innerText = `${windchill.toFixed(2)} °C`;
} else {
    document.getElementById("result").innerText = windchill;
}

