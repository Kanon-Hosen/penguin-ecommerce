const navSlide = () => {
    const burger = document.getElementById('burger');
    const navBar = document.getElementById('navBar');

    burger.addEventListener('click', () => {
        navBar.classList.toggle('right-0')
    })
}
navSlide();