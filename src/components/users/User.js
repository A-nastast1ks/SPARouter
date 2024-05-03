export const renderUser = (userData) => {
  const a = document.createElement('a');
  a.href = `#user-${userData.id}`;

  const user = document.createElement('div');

  const id = document.createElement('span');
  id.textContent = userData.id;
  id.classList.add('id');

  const name = document.createElement('h2');
  name.textContent = userData.name;
  name.classList.add('name');

  user.append(id, name);

  user.classList.add('user');

  a.append(user);

  return a;
};
