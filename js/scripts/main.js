
//Slide banner s-hero
const slideThumb = new Swiper('.slide-thumbnail', {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true
});

const swiperSlide = new Swiper('.swiper-principal', {
    effect: 'fade',
    thumbs: {
        swiper: slideThumb,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    }
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