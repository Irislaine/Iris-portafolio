function showMenu() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.navbar__menu')

    nav.addEventListener('click', function (event) {
        if (event.target.closest('.btn--menu')) {
            menu.classList.toggle('show--menu')
        }

        if (event.target.closest('.menu__link')) {
            menu.classList.remove('show--menu')
        }
    })

}

export default showMenu