import Cursor from './cursor';
import Grid from './grid';
import { preloadImages, animateButton } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const button = document.querySelector('.button');

// Preload  images
preloadImages('.grid__item-img, .bigimg').then(() => {
  // Remove loader (loading class)
  document.body.classList.remove('loading');

  // Initialize grid
  const grid = new Grid(document.querySelector('.grid'));

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });

  document.querySelector('.button').onmousemove = (e) => {
    button.classList.add('button-hover');
    button.classList.remove('border-gradient');
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
  };

  document.querySelector('.button').onmouseleave = (e) => {
    button.classList.remove('button-hover');
    button.classList.add('border-gradient');
  };
});

// const cursor = new Cursor(document.querySelector('.cursor'));
