import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const template = ({ description, original, preview }) => `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt='${description}' />
</a>`;
const galleryTemplate = galleryItems.map(galleryItem => template(galleryItem)).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryTemplate);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
