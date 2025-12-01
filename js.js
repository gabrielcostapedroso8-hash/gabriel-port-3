
const myCarouselElement = document.querySelector('#items');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, 
  touch: true,    
  wrap: true      
});


myCarouselElement.addEventListener('slide.bs.carousel', (event) => {
  console.log(`Slide atual: ${event.from}, indo para: ${event.to}, direção: ${event.direction}`);
});


myCarouselElement.addEventListener('slid.bs.carousel', () => {
  console.log('Slide completado!');
});
