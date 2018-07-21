const slider = document.querySelector('#slider');
const slides = slider.querySelectorAll('.slide');
const titles = slider.querySelectorAll('.heroText');
const nextBtn = slider.querySelector('.nextBtn');
const prevBtn = slider.querySelector('.prevBtn');

let count = 0;
let timer;
const time = 9000;

const changeSlide = () => {
  // Fade out current slide and remove current text animation class
  slides[count].style.opacity = 0;
  titles[count].classList.remove('textAnimation');

  // Fade in next slide ans add animation class to next text
  if(count === slides.length - 1) {
    slides[0].style.opacity = 1;
    titles[0].classList.add('textAnimation');
    count = 0;
  } else {
    slides[count + 1].style.opacity = 1;
    titles[count + 1].classList.add('textAnimation');
    count++;
  }
};

prevBtn.addEventListener('click', () => {
  clearInterval(timer);
  slides[count].style.opacity = 0;
  titles[count].classList.remove('textAnimation');

  if(count === 0) {
    slides[slides.length - 1].style.opacity = 1;
    titles[slides.length - 1].classList.add('textAnimation')
    count = slides.length - 1;
  } else {
    slides[count - 1].style.opacity = 1;
    titles[count - 1].classList.add('textAnimation')
    count--;
  }
  timer = setInterval(changeSlide, time);
});

nextBtn.addEventListener('click', () => {
  clearInterval(timer);
  changeSlide();
  timer = setInterval(changeSlide, time);
});

timer = setInterval(changeSlide, time);
