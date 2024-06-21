const button = document.querySelector('button[type="submit"]');
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');



button.addEventListener('click', (e) => {
    if (input.value.trim() !== '') {
        e.preventDefault();

        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
    }
})

