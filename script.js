'use strict';
// We work with the class in this project and the working with the classes is the important in the js and it is easy.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// queryselector show only the single element
const btnOpenModal = document.querySelector('.show-modal');
// query selector all show all the element with the given selector
const btnOpenModalAll = document.querySelectorAll('.show-modal');
// console.log(btnOpenModalAll);

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModalAll.length; i++) {
  btnOpenModalAll[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// Responding to the keyboard press key events in the js

document.addEventListener('keydown', function (e) {
  //   console.log('A key was pressed!');
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  //   console.log(e);
});
