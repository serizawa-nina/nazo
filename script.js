const clickBox = () => {
  document.querySelector('div#box').style.background = 'cyan';
};

document.querySelector('div#box').addEventListener('click', clickBox);
