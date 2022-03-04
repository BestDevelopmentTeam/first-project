const sneakersSize = document.querySelector('.sneakers_size');
const sneakersSizeName = document.querySelector('.sneakers__sizeName');
const sneakersMinus = document.querySelector('.sneakers_minus');
const sneakersAdd = document.querySelector('.sneakers_add');
const sneakersQuantity = document.querySelector('.sneakers__quantity');
const sneakersHeart = document.querySelector('.sneakers__heart');
const sneakersColorBorder = document.querySelectorAll('.sneakers__colorsBorder');

const sneakers_SizeNames = ['xs','s','m','l','xl','xxl','xxxl'];
const borderColors = [ 
  'rgba(0, 108, 255, 0.4)', 'rgba(252, 62, 57, 0.4)', 
  'rgba(23, 23, 23, 0.4)', 'rgba(255, 246, 0, 0.4)'
];
let size = 0;
let quantity = 2;
let borderId = undefined;
let borderClassName = undefined;

sneakersHeart.addEventListener('click', () => { 
  sneakersHeart.classList.toggle('sneakers__redHeart');
  sneakersHeart?.classList?.contains('sneakers__redHeart') === true ?
  sneakersHeart.style.backgroundImage = "url('../images/red_heart.png')" :
  sneakersHeart.style.backgroundImage = "url('../images/blue_heart.png')";
});

sneakersSize.addEventListener('click', () => { 
  size + 1 === sneakers_SizeNames.length ? size = -1 : size = size;
  sneakersSizeName.textContent = sneakers_SizeNames[++size];
});

sneakersMinus.addEventListener('click', () => { 
  quantity - 1 > 0 ? --quantity : quantity = quantity; 
  sneakersQuantity.textContent = quantity;
});

sneakersAdd.addEventListener('click', () => { 
  quantity + 1 < 11 ? ++quantity : quantity = quantity; 
  sneakersQuantity.textContent = quantity;
});

sneakersColorBorder.forEach(items => {
  items.addEventListener('click', (item) => {
    const className = item.currentTarget;
    const targetId = className.dataset.id;
    if(borderId !== parseInt(targetId) && borderClassName !== undefined)
    borderClassName.style.borderColor = null;
    className.style.borderColor = borderColors[parseInt(targetId)];
    borderClassName = className;
  });
})