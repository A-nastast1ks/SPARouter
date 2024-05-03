import { renderPhotos } from './components/photos/Photos.js';
import { renderUsers } from './components/users/Users.js';
import { renderAlbums } from './components/albums/Albums.js';
import { getAlbums, getPhotos, getUsers } from './API/DataService.js';
import { backButton } from './components/back/BackButton.js';

const root = document.getElementById('root');
const back = document.getElementById('back');
back.append(backButton());

window.addEventListener('hashchange', routeHandler);
let photoPage = 1;

window.addEventListener('scroll', addPhotos);

function addPhotos() {
  const route = window.location.hash;
  const viewPortHeight = document.documentElement.clientHeight;
  const docHeight = document.documentElement.scrollHeight;
  const currentScroll = document.documentElement.scrollTop;
  const albumId = route.split('/')[0].split('-')[1];

  let isLoading = currentScroll + viewPortHeight > docHeight - 1;

  if (isLoading && route.includes('album')) {
    window.removeEventListener('scroll', addPhotos);
    photoPage += 1;
    getPhotos(albumId, 15, photoPage).then(async (data) => {
      const photos = await data.json();

      root.append(renderPhotos(photos));
    });
  }

  window.addEventListener('scroll', addPhotos);
}

function routeHandler() {
  const route = window.location.hash;
  photoPage = 1;

  root.children[0] && root.removeChild(root.children[0]);

  const userId = route.split('/')[0].split('-')[1];
  const albumId = route.split('/')[0].split('-')[1];

  if (route.includes('album')) {
    getPhotos(albumId).then(async (data) => {
      const photos = await data.json();

      root.append(renderPhotos(photos));
    });
  } else if (route.includes('user')) {
    getAlbums(userId).then(async (data) => {
      const albums = await data.json();

      root.append(renderAlbums(albums));
    });
  } else {
    getUsers().then(async (data) => {
      const users = await data.json();

      root.append(renderUsers(users));
    });
  }
}

routeHandler('');
