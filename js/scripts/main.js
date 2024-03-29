
//Slide banner s-hero
const slideThumb = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
        },
        1050: {
            direction: 'vertical',
        }
    }
});

const progressSlide = document.querySelector('.js-progress')

const swiperSlide = new Swiper('.swiper-principal', {
    effect: 'fade',
    thumbs: {
        swiper: slideThumb,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    //Barra de progress 
    on: {
        init: function () {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function () {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function () {
            progressSlide.classList.add('animate');
        },
    },
});

//Filtro tab s-games
const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (event) => {
        event.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active')
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        tabPane[index].classList.add('active');
        filter.classList.add('active');
    })
});


//Modal de login
const openModal = document.querySelector('.js-open-modal');
const btnFecharModal = document.querySelector('.js-close');
const closeOverlay = document.querySelector('.js-overlay')

openModal.addEventListener('click', (event) => {
    event.preventDefault();

    let tagHtml = document.documentElement;
    tagHtml.classList.add('show-modal');

})

btnFecharModal.addEventListener('click', () => {

    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal');

})

closeOverlay.addEventListener('click', () => {

    let tagHtml = document.documentElement;
    tagHtml.classList.remove('show-modal')

})


//Dropdown aba menu Jogos e Esportes
const btnMenu = document.querySelectorAll('.js-btn-menu');
const abaMenu = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        abaMenu.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                })
            })
        })



        btn.classList.add('active')
        abaMenu[index].classList.add('active')
    })
})

//Menu fixo
const header = document.getElementById('js-header');

function fixedMenu() {
    if (window.scrollY > 5) {
        header.classList.add('fixed-menu');
    } else {
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll', fixedMenu);



//Menu mobile
const btnMenuMobile = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay-menu');

function openMenuMobile(event) {
    event.preventDefault();
    document.documentElement.classList.toggle('menu-opened');
}

btnMenuMobile.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);




//Dropdown menu mobile
const dropdownMobile = document.querySelectorAll('.js-btn-menu-mobile');
const abaMenuMobile = document.querySelectorAll('.js-dropdown-mobile')
const fecharDropdownMobile = document.querySelectorAll('.js-close-mobile')

dropdownMobile.forEach((btnAba, index) => {
    btnAba.addEventListener('click', (event) => {
        event.preventDefault();

        abaMenuMobile.forEach(itemMenu => {
            itemMenu.classList.remove('active');

        })

        dropdownMobile.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        })

        btnAba.classList.add('active')
        abaMenuMobile[index].classList.add('active')
    })
    
})

