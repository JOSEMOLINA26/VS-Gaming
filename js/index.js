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

