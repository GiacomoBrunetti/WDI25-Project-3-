angular
  .module('hrApp', ['ui.router', 'ngResource', 'satellizer', 'ngMessages']);



document.addEventListener('DOMContentLoaded', () => {

  const chooseFile = document.getElementById('chooseFile');
  console.log(chooseFile);
  chooseFile.addEventListener('change', () => {
    chooseFile.innerText = this.value;
  });


});
