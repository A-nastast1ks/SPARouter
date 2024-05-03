export const renderPhoto = (photoData) => {
  const photo = document.createElement('div');

  const img = document.createElement('img');
  img.src = photoData.thumbnailUrl;

  const title = document.createElement('h2');
  title.textContent = photoData.title;
  title.classList.add('title');

  photo.append(img, title);

  photo.classList.add('photo');

  return photo;
};
