import { renderPhoto } from './Photo.js';

export const renderPhotos = (photoData) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('photos');

  const photos = photoData.map((photo) => renderPhoto(photo));

  wrapper.append(...photos);

  return wrapper;
};
