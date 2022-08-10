const body = document.body;
const h1 = document.querySelector('h1');
const item = document.getElementsByClassName('item');
const itemText = document.querySelectorAll('.item h2, p');
const toggleText = document.querySelector('.toggle p');
const toggleInitialText = 'Dark Mode';
// const btn = document.getElementById('btn');

 const toggleTheme = () => {
    body.classList.toggle('body-dark-mode');

    h1.classList.toggle('h1-dark-mode');

    for (let i = 0; i < item.length; i++) {
        item[i].classList.toggle('item-dark-mode');
    };

    for (let i = 0; i < itemText.length; i++) {
        itemText[i].classList.toggle('itemText-dark-mode');
    };

    if (toggleText.textContent.toLowerCase().includes(toggleInitialText.toLowerCase())) {
        toggleText.textContent = 'Light Mode';
    } else {
        toggleText.textContent = toggleInitialText;
    };

    // btn.classList.toggle('button-dark-mode');

    // if (btn.textContent.toLowerCase().includes(toggleInitialText.toLowerCase())) {
    //     btn.textContent = 'Light Mode';
    // } else {
    //     btn.textContent = toggleInitialText;
    // };
};