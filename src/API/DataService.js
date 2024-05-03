const url = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await fetch(`${url}/users`);

    return response;
  } catch (e) {
    console.log(e.message);
  }
};

export const getAlbums = async (id) => {
  try {
    const response = await fetch(`${url}/users/${id}/albums`);

    return response;
  } catch (e) {
    console.log(e.message);
  }
};

export const getPhotos = async (id, limit = 15, page = 1) => {
  try {
    const response = await fetch(
      `${url}/albums/${id}/photos?_limit=${limit}&_page=${page}`,
      {}
    );

    return response;
  } catch (e) {
    console.log(e.message);
  }
};
