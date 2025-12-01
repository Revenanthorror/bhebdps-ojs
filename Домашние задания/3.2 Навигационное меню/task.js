document.addEventListener('DOMContentLoaded', () => {
  const mainMenus = document.querySelectorAll('.menu.menu_main');

  mainMenus.forEach(menu => {
    const menuLinks = menu.querySelectorAll('.menu__link');

    menuLinks.forEach(link => {
      link.onclick = function(event) {
        const subMenu = this.closest('.menu__item').querySelector('.menu_sub');

        if (subMenu) {
          subMenu.classList.toggle('menu_active');

          event.preventDefault();

          const allSubMenus = menu.querySelectorAll('.menu_sub.menu_active');

          allSubMenus.forEach(openSubMenu => {
            if (openSubMenu !== subMenu) {
              openSubMenu.classList.remove('menu_active');
            }
          });
        }
      };
    });
  });
});