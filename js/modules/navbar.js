function navbar() {
    // Navbar in scroll

    const header = document.querySelector('.header'),
          hamburger = header.querySelector('.header__hamburger'),
          menu = document.querySelector('.menu');

    let scrollTopNow;

    function updateNavbar() {
        if (document.documentElement.clientWidth > 900) {
            scrollTopNow = window.pageYOffset;
            if (scrollTopNow > 50) {
                header.style.paddingTop = `15px`;
                header.style.borderBottom = '1px solid rgba(242, 242, 242, .3)';
            } else if (scrollTopNow <= 50) {
                header.style.paddingTop = `60px`;
                header.style.borderBottom = 'none';
            }
        }
    }

    updateNavbar();

    window.addEventListener('scroll', () => {
        updateNavbar();
    });

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('hamburger_out')) {
            hamburger.children[0].classList.remove('firstspanIn');
            hamburger.children[2].classList.remove('thirdspanIn');
            hamburger.children[0].classList.add('firstspanOut');
            hamburger.children[2].classList.add('thirdspanOut');
            hamburger.classList.remove('hamburger_out');
            menu.style.height = `${document.documentElement.clientHeight}px`;
            menu.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
            hamburger.children[0].classList.remove('firstspanOut');
            hamburger.children[0].classList.add('firstspanIn');
            hamburger.children[2].classList.remove('thirdspanOut');
            hamburger.children[2].classList.add('thirdspanIn');
            hamburger.classList.add('hamburger_out');
            menu.style.height = `${document.documentElement.clientHeight}px`;
            menu.style.right = '-100%';
            document.body.style.overflow = 'visible';
        }
    });
}

export default navbar;