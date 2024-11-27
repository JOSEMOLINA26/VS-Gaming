const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')
const socialIcons = document.getElementById('social-icons');
const directionButton = document.getElementById('direction-button');

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')
  socialIcons.classList.toggle('hide');
  directionButton.classList.toggle('invisible');
}

const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    tooltip.textContent = image.alt;
    tooltip.classList.add('tooltip');
    image.appendChild(tooltip);
  });

  image.addEventListener('mouseout', () => {
    const tooltip = image.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  });
});