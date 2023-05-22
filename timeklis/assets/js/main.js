function setMainFontSize() {
    const fontCoef = Math.max(window.innerWidth / 1920, 1);
    const fontSize = Math.floor(100 * fontCoef);
    document.querySelector('html').style.fontSize = fontSize < 16 ? '16px' : fontSize + '%';
}

// setMainFontSize();
window.addEventListener('resize', setMainFontSize);

$(document).ready(function() {
    $(window).scroll(function() {
        let currentPosition = $(window).scrollTop();
        $('.section').each(function() {
            let target = $(this).offset().top - 50;
            let id = $(this).attr('id');
            if (currentPosition+100 >= target) {
                $('.nav-item').removeClass('active').addClass('inactive');
                $('.nav-items a[href="#' + id + '"]').removeClass('inactive').addClass('active');
            }
        });
    });
});

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navItems = document.querySelector('.mobile-nav-items');
    const arrow_up = document.querySelector('.arrow_up');

    const isOpened = hamburger.classList.contains('opened');
    hamburger.classList.toggle('opened');
    if (isOpened) {
        console.log('test1')
        navItems.classList.remove('closed');
        hamburger.classList.toggle('closed');
        arrow_up.classList.toggle('closed');
        arrow_up.classList.toggle('opened');
        navItems.style.maxHeight = navItems.scrollHeight + 'px';
    } else {
        console.log('test2')
        arrow_up.classList.toggle('closed');
        arrow_up.classList.toggle('opened');
        hamburger.classList.toggle('closed');
        navItems.style.maxHeight = '0';
        navItems.addEventListener('transitionend', function() {

        }, { once: true });
    }
}