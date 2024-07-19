document.getElementById('entryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get entry form data
    const formData = {
        date: document.getElementById('date').value,
        years2: document.getElementById('years2').value,
        months2: document.getElementById('months2').value,
        weight2: document.getElementById('weight2').value,
        height2: document.getElementById('height2').value,
        indications: document.getElementById('indications').value
    };

    // Retrieve existing entries from local storage
    const storedData = localStorage.getItem('entries');
    let entries = storedData ? JSON.parse(storedData) : [];

    // Add new entry to the array
    entries.push(formData);

    // Save the updated array to local storage
    localStorage.setItem('entries', JSON.stringify(entries));

    // Create a new card element for the new entry
    const card = document.createElement('div');
    card.className = 'card-entry';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const cardText = `
        <p><strong>Date:</strong> ${formData.date}</p>
        <p><strong>Age:</strong> ${formData.years2} years and ${formData.months2} months</p>
        <p><strong>Weight:</strong> ${formData.weight2}</p>
        <p><strong>Height:</strong> ${formData.height2}</p>
        <p><strong>Indications:</strong> ${formData.indications}</p>
        `;

    cardContent.innerHTML = cardText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', function () {
        // Remove the card from the DOM
        card.remove();

        // Remove the entry from local storage
        const index = entries.findIndex((e) => {
            return (
                e.date === entry.date &&
                e.years2 === entry.years2 &&
                e.months2 === entry.months2 &&
                e.weight2 === entry.weight2 &&
                e.height2 === entry.height2 &&
                e.indications === entry.indications
            );
        });
        if (index !== -1) {
            entries.splice(index, 1);
            localStorage.setItem('entries', JSON.stringify(entries));
        }
    });

    cardContent.appendChild(deleteButton);
    card.appendChild(cardContent);

    document.getElementById('card-container').appendChild(card);

    // Reset the form fields
    document.getElementById('date').value = '';
    document.getElementById('years2').value = '';
    document.getElementById('months2').value = '';
    document.getElementById('weight2').value = '';
    document.getElementById('height2').value = '';
    document.getElementById('indications').value = '';
});

// Load existing entries from local storage and display them
const storedData = localStorage.getItem('entries');
if (storedData) {

    // Show container when entry added
    const addButton = document.getElementById('add');
    const cardContainer = document.getElementById('card-container');

    addButton.addEventListener('click', () => {
        cardContainer.classList.add('show');
    });

    const entries = JSON.parse(storedData);
    entries.forEach((entry) => {
        cardContainer.classList.add('show');
        const card = document.createElement('div');
        card.className = 'card-entry';

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const cardText = `
        <p><strong>Date:</strong> ${entry.date}</p>
        <p><strong>Age:</strong> ${entry.years2} years and ${entry.months2} months</p>
        <p><strong>Weight:</strong> ${entry.weight2}</p>
        <p><strong>Height:</strong> ${entry.height2}</p>
        <p><strong>Indications:</strong> ${entry.indications}</p>
        `;

        cardContent.innerHTML = cardText;

        // Add a delete button to the card
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', function () {
            // Remove the card from the DOM
            card.remove();

            // Remove the entry from local storage
            const index = entries.findIndex((e) => {
                return (
                    e.date === entry.date &&
                    e.years2 === entry.years2 &&
                    e.months2 === entry.months2 &&
                    e.weight2 === entry.weight2 &&
                    e.height2 === entry.height2 &&
                    e.indications === entry.indications
                );
            });
            if (index !== -1) {
                entries.splice(index, 1);
                localStorage.setItem('entries', JSON.stringify(entries));
            }
        });

        cardContent.appendChild(deleteButton);
        card.appendChild(cardContent);

        document.getElementById('card-container').appendChild(card);
    });
}

