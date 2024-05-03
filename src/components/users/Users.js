import { renderUser } from './User.js';

export const renderUsers = (usersData) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('users');

  const users = usersData.map((user) => renderUser(user));

  wrapper.append(...users);

  return wrapper;
};
