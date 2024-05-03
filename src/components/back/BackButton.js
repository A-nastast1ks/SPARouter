export const backButton = () => {
  const button = document.createElement('button');
  button.classList.add('back');
  button.textContent = 'Назад';
  button.addEventListener('click', () => {
    window.history.back();
  });

  return button;
};
