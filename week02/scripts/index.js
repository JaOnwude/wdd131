const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            const currentItem = input.value;
            input.value = '';

            const listItem = document.createElement('li');
            const deleteBtn = document.createElement('button');

            listItem.textContent = currentItem
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = '❌';
            deleteBtn.setAttribute('aria-label', 'Remove Alma 5')
            list.appendChild(listItem);

            deleteBtn.addEventListener('click', () => {
                list.removeChild(listItem);
        });

            input.focus();
        } else {
            alert("Please enter your favorite chapter!");
        }
});



