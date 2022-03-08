const toggleMenu = function (menuId, toggleId) {
    const menuEl = document.getElementById(menuId)
    const toggleEl = document.getElementById(toggleId)
    console.log(menuEl)
    console.log(toggleEl)

    if (menuEl && toggleEl) {
        toggleEl.addEventListener('click', () => {
            menuEl.classList.toggle('show-menu')
        })
    } else {
        console.warn('Alguno de los elementos no existen en el HTML 👀')
    }
}

toggleMenu('js-menu', 'js-menu-icon')