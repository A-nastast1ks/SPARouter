export const renderAlbum = (albumData) => {
  const a = document.createElement('a');
  a.href = window.location + `/album-${albumData.id}`;

  const album = document.createElement('div');

  const userId = document.createElement('span');
  userId.textContent = albumData.userId;
  userId.classList.add('id');

  const id = document.createElement('span');
  id.textContent = albumData.id;
  id.classList.add('id');

  const title = document.createElement('h2');
  title.textContent = albumData.title;
  title.classList.add('title');

  album.append(id, title, userId);

  album.classList.add('album');

  a.append(album);

  return a;
};
