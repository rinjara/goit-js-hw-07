import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const template = ({ description, original, preview }) => `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;

const modalTemplate = source => `<div class="modal">
<img src=${source} width="1100" height="600">
</div>`;

const galleryTemplate = galleryItems.map(galleryItem => template(galleryItem)).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryTemplate);

galleryRef.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(modalTemplate(event.target.dataset.source), {
    onShow: instance => {
      window.addEventListener('keydown', closeOnEsc);
    },
    onClose: instance => {
      window.removeEventListener('keydown', closeOnEsc);
    },
  });

  instance.show();

  function closeOnEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  instance.element().querySelector('img').onclick = instance.close;
});
