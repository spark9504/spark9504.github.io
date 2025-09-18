(() => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');

    const closeNav = () => {
        if (!toggle || !nav) return;
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
    };

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            nav.classList.toggle('is-open');
        });

        nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 860) {
                    closeNav();
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860) {
                closeNav();
            }
        });
    }

    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    const form = document.querySelector('.contact__form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');
            const messageInput = form.querySelector('#message');

            const isEmpty = [nameInput, emailInput, messageInput].some((input) => !input.value.trim());
            if (isEmpty) {
                alert('??, ???, ???? ?? ??? ???.');
                return;
            }

            alert('?????! ??? ? ????????.');
            form.reset();
        });
    }
})();
