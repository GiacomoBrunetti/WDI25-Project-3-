angular
  .module('hrApp', ['ui.router', 'ngResource', 'satellizer', 'ngMessages']);



document.addEventListener('DOMContentLoaded', () => {

  const labels = document.getElementsByTagName('label');
  console.log(labels);
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', () => {
      console.log('click');
      labels[i].className +='selected';
    });
  }

});
