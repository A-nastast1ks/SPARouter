import { renderAlbum } from './Album.js';

export const renderAlbums = (albumsData) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('albums');

  const albums = albumsData.map((album) => renderAlbum(album));

  wrapper.append(...albums);

  return wrapper;
};
