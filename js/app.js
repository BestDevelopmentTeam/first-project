// PRODUCTS Chosen color
let colors = document.querySelectorAll('.container__colors .color');
colors.forEach((color, i) => {
  const hexColors = ['#fc3e39', '#006cff', '#171717', '#fff600', '#ff00b4', '#efdfdf'];
  color.addEventListener('click', () => {
    colors.forEach((color) => color.style.borderColor = 'transparent');
    color.style.borderColor = hexColors[i]
  });
});
// PRODUCTS chosen color end
