const calculateScroll = () => {
  const div = document.createElement('div');
  div.style.width = '40px';
  div.style.height = '40px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  
  const scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

export default calculateScroll;