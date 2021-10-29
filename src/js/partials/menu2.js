$(document).ready(function(){

    $(document).on('mouseover','.menu__item',function (){
        if ($(window).width() > 1279){
            let submenu = $(this).children('.menu__submenu');
            if (submenu.length){
                submenu.stop().slideDown(300);
            }
        }
    });

    $(document).on('mouseleave','.menu__item',function (event){
        if ($(window).width() > 1279){
            var e = event.toElement || event.relatedTarget;
            if (e){
                if (e.parentNode == this || e == this) {
                    return;
                }
            }
            let submenu = $(this).children('.menu__submenu');
            if (submenu.length){
                submenu.stop().slideUp(300);
            }
        }
    });


    $(document).on('mouseover','.menu__submenu-item',function (){
        if ($(window).width() > 1279){
            let submenu = $(this).children('.menu__submenu-list');
            if (submenu.length){
                submenu.stop().slideDown(300);
                $(this).parent().addClass('active');
            }
        }
    });
    $(document).on('mouseleave','.menu__submenu-item',function (event){
        if ($(window).width() > 1279){
            var e = event.toElement || event.relatedTarget;
            if (e){
                if (e.parentNode == this || e == this) {
                    return;
                }
            }
            let submenu = $(this).children('.menu__submenu-list');
            if (submenu.length){
                submenu.stop().slideUp(300);
                $(this).parent().removeClass('active');
            }
        }
    });

    /*$(document).on('click','.header__burger',function (event){
        event.preventDefault();
        if ($(window).width < 1280){

        }
    });*/

    var setMobile = false;

    function headerMobileReposition(){
        if ($(window).width() < 1280 && !setMobile){
            $('.header__right .header__lang-swither, .header__right .header__basket').appendTo('.header__main-bottom');
            setMobile = true;
        } else if ($(window).width() > 1280 && setMobile){
            $('.header__main-bottom .header__lang-swither, .header__main-bottom .header__basket').prependTo('.header__right');
            setMobile = false;
        }
    }

    headerMobileReposition();

    $(window).on('resize',function (){
        headerMobileReposition();
    });


});


window.addEventListener('load', () => {
    const html = document.documentElement;
    const submenuLists = document.querySelectorAll('.menu__submenu-list');
    const breakpoint = 1280;
    const header = document.querySelector('.header');
    let isSubmenuSimplebar = false;

    if (header) {
        const canvas = header.querySelector('.header__main');
        const openBtn = header.querySelector('.header__burger');
        const closeBtn = canvas.querySelector('.header__main-close');

        const ModifierClass = {
            HEADER: 'is-menu-open',
            ANIMATE: 'animate',
            SHOWN: 'shown'
        };

        let overlay = null;

        if (html.clientWidth < breakpoint) {
            openBtn.onclick = openMenu;
        }



        //appendProfile();

        function openMenu() {
            blockScroll();
            overlay = setOverlay(closeMenu);
            header.appendChild(overlay);
            canvas.classList.add(ModifierClass.ANIMATE);
            canvas.classList.add(ModifierClass.SHOWN);

            canvas.ontransitionend = () => {
                canvas.ontransitionend = null;
                canvas.classList.remove(ModifierClass.ANIMATE);
                header.classList.add(ModifierClass.HEADER);

                closeBtn.onclick = closeMenu;
                openBtn.onclick = null;
            }
        }

        function closeMenu() {
            header.classList.remove(ModifierClass.HEADER);
            canvas.classList.add(ModifierClass.ANIMATE);
            canvas.classList.remove(ModifierClass.SHOWN);

            canvas.ontransitionend = () => {
                canvas.ontransitionend = null;
                canvas.classList.remove(ModifierClass.ANIMATE);

                overlay.remove();
                overlay = null;

                closeBtn.onclick = null;
                openBtn.onclick = openMenu;
                unblockScroll();
            }
        }

        function resetMenu() {
            header.classList.remove(ModifierClass.HEADER);
            canvas.classList.remove(ModifierClass.SHOWN);

            openBtn.onclick = null;
            closeBtn.onclick = null;

            if (overlay) {
                overlay.remove();
                overlay = null;
            }

            unblockScroll();
        }



        function setOverlay(cb) {
            const overlay = document.createElement('div');
            overlay.classList.add('header__overlay');
            overlay.addEventListener('click', cb);
            return overlay;
        }

        function blockScroll() {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = getScrollbarWidth() + 'px';
        }

        function unblockScroll() {
            document.body.style.overflow = '';
            document.body.style.marginRight = '';
        }


        window.addEventListener('resize', () => {
            if (html.clientWidth < breakpoint) {
                openBtn.onclick = openMenu;
            } else {
                resetMenu();
            }
        });
    }



    function getScrollbarWidth() {
        const block = document.createElement('div');
        block.style.width = '50px';
        block.style.height = '50px';
        block.style.overflow = 'auto';

        const innerBlock = document.createElement('div');
        innerBlock.style.height = '200px';

        block.appendChild(innerBlock);
        document.body.appendChild(block);

        const width = block.offsetWidth - block.clientWidth;

        block.remove();
        return width;
    }

});