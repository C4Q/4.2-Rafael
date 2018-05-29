document.addEventListener('DOMContentLoaded', () => {
  console.log('hello world');

  let modP = document.querySelector('#modP');
  const upper = document.getElementById("up")
  const lower = document.getElementById("lo")
  const length = document.getElementById("le")
  const reverse = document.getElementById("re")
  const str = document.getElementById("inputstr")

  upper.addEventListener('click', (event) => {
    fetch('/upper/'+str.value+'/', {
      method: 'GET',
      mode: 'cors'
  }).then(function(response) {
      return response.json();
  }).then(function(myBlob) {
    modP.innerText = myBlob.result
  })
  });

  lower.addEventListener('click', (event) => {
    fetch('/lower/'+str.value+'/', {
      method: 'GET',
      mode: 'cors'
  }).then(function(response) {
      return response.json();
  }).then(function(myBlob) {
    modP.innerText = myBlob.result
  })
  });

  reverse.addEventListener('click', (event) => {
    fetch('/reverse/'+str.value+'/', {
      method: 'GET',
      mode: 'cors'
  }).then(function(response) {
      return response.json();
  }).then(function(myBlob) {
    modP.innerText = myBlob.result
  })
  });

  length.addEventListener('click', (event) => {
    fetch('/length/'+str.value+'/', {
      method: 'GET',
      mode: 'cors'
  }).then(function(response) {
      return response.json();
  }).then(function(myBlob) {
    modP.innerText = myBlob.result
  })
  });
});
