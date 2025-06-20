/********* PAGE LOADER ******/

window.addEventListener('load', () => {
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.section-home').classList.add('active');
    document.querySelector('.page-loader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.page-loader').style.display = 'none';
    },600);
});

/********* NAVIGATION ******/

const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide-scrolling'); 
});

function hideSection() {
    document.querySelector('section.active').classList.toggle('fade-out');
}

function toggleNavbar() {
    document.querySelector('.header').classList.toggle('active');
}

/********** ABOUT **********/

const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.section-about');

tabsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')){
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');
    }
})

/********* PORTFOLIO ******/

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-project-btn')){
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}

document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('pp-inner')){
        togglePortfolioPopup();
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.pp-header h3').innerHTML = portfolioItem.querySelector('.portfolio-item-title').innerHTML;
    document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

/********* ACTIVE SECTION ******/

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('link-item') && e.target.hash !== ''){
        document.querySelector('.overlay').classList.add('active');
        navToggler.classList.add('hide');
        if(e.target.classList.contains('nav-item')){
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add('hide-scrolling'); 
        }
        setTimeout(() => {
            document.querySelector('section.active').classList.remove('active', 'fade-out');
            document.querySelector(e.target.hash).classList.add('active');
            window.scrollTo(0,0);
            document.body.classList.remove('hide-scrolling');
            navToggler.classList.remove('hide');
            document.querySelector('.overlay').classList.remove('active');
        }, 500);
    }
});
