
const sliders = document.querySelectorAll('.slide');
const auto = true;


const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check if there is a sibling element
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add('current');
    }
    else
    {
        //Add current to start
        sliders[0].classList.add('current');
    }
}

 setInterval(nextSlide,10000);
