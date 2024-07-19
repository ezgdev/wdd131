document.addEventListener('DOMContentLoaded', () => {
    const periodCards = document.querySelectorAll('.filter-cards-container .filter-card');
    const vaccinesContainer = document.querySelector('.vaccines-container');
    const vaccinesHeader = document.querySelector('h3');

    const vaccines = [
        { name: 'Hepatitis B', period: '0' },
        { name: 'BCG', period: '0' },
        { name: 'Pentavalent', period: '2' },
        { name: 'Salk/IPV', period: '2' },
        { name: 'Pneumococcal Conjugate', period: '2' },
        { name: 'Rotavirus', period: '2' },
        { name: 'Meningococcus', period: '3' },
        { name: 'Pentavalent (2nd dose)', period: '4' },
        { name: 'Salk/IPV (2nd dose)', period: '4' },
        { name: 'Pneumococcal Conjugate (2nd dose)', period: '4' },
        { name: 'Rotavirus (2nd dose)', period: '4' },
        { name: 'Meningococcus (2nd dose)', period: '5' },
        { name: 'Pentavalent (3rd dose)', period: '6' },
        { name: 'Salk/IPV (3rd dose)', period: '6' },
        { name: 'Anti-flu', period: '6' },
        { name: 'Anti-flu (2nd dose)', period: '6' },
        { name: 'Triple Viral', period: '12' },
        { name: 'Hepatitis A', period: '12' },
        { name: 'Pneumococcal Conjugate (3rd dose)', period: '12' },
        { name: 'Meningococcus (3rd dose)', period: '15-18' },
        { name: 'Varicella', period: '15-18' },
        { name: 'Pentavalent (4th dose)', period: '15-18' },
        { name: 'Triple Bacterial', period: '5-6' },
        { name: 'Sabin/OPV', period: '5-6' },
        { name: 'Triple Viral (2nd dose)', period: '5-6' },
        { name: 'Human Papillomavirus', period: '11' },
        { name: 'Human Papillomavirus (2nd dose)', period: '11' },
        { name: 'Triple Bacterial (2nd dose)', period: '11' },
    ];

    periodCards.forEach(filterCard => {
        filterCard.addEventListener('click', () => {
            const selectedPeriod = filterCard.getAttribute('data-period');
            filterVaccines(selectedPeriod);
            vaccinesHeader.classList.remove('hidden');
        });
    });

    function filterVaccines(period) {
        vaccinesContainer.innerHTML = '';
        const filteredVacunas = vaccines.filter(vaccine => vaccine.period === period);

        if (filteredVacunas.length > 0) {
            filteredVacunas.forEach(vaccine => {
                const vaccineCard = document.createElement('div');
                vaccineCard.className = 'vaccine-card';
                vaccineCard.textContent = vaccine.name;
                vaccinesContainer.appendChild(vaccineCard);
            });
            vaccinesContainer.classList.remove('hidden');
        } else {
            vaccinesContainer.textContent = 'There are no vaccines for this period';
        }
    }
});