const prices = document.querySelectorAll('.price');

prices.forEach(item => {
    const price = item.textContent;
    item.textContent = `\$${price}`
})

const menus = document.querySelectorAll('.menuItem');
const coffeeMenuCtr = document.getElementById('coffeeMenuCtr');
const hotMenuCtr = document.getElementById('hotMenuCtr');
const coldMenuCtr = document.getElementById('coldMenuCtr');
menus.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target == menus[0]) {
            menus[0].classList.add('scaled-up');
            menus[1].classList.remove('scaled-up');
            menus[2].classList.remove('scaled-up');
            coffeeMenuCtr.style.display = 'block';
            hotMenuCtr.style.display = 'none';
            coldMenuCtr.style.display = 'none';
        } else if (e.target == menus[1]) {
            menus[0].classList.remove('scaled-up');
            menus[1].classList.add('scaled-up');
            menus[2].classList.remove('scaled-up');
            coffeeMenuCtr.style.display = 'none';
            hotMenuCtr.style.display = 'block';
            coldMenuCtr.style.display = 'none';
        } else if (e.target == menus[2]) {
            menus[0].classList.remove('scaled-up');
            menus[1].classList.remove('scaled-up');
            menus[2].classList.add('scaled-up');
            coffeeMenuCtr.style.display = 'none';
            hotMenuCtr.style.display = 'none';
            coldMenuCtr.style.display = 'block';
        }
    })
})