let toggleStatus = true;

document.getElementById('toggle-btn').addEventListener('toggle', toggleMenu);

function toggleMenu() {
  let navList = document.querySelector(".navList");
  if (!toggleStatus) {
    navList.style.maxHeight = '500px';
    let navItems = document.querySelectorAll(".navItem");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = '1';
      navItems[i].style.visibility = 'visible';      
    }
    toggleStatus = true;
  } else if (toggleStatus) {
    navList.style.maxHeight = '0';
    let navItems = document.querySelectorAll(".navItem");
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = '0';
      navItems[i].style.visibility = 'hidden';
    }
    toggleStatus = false;
  }  
}