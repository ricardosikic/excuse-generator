let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let btn = document.getElementById('boton');
let text = document.getElementById('excuse');

btn.addEventListener('click', agrega);



function rand(arr) {
  let position = arr[(Math.floor(Math.random() * arr.length))]; 
  return position;
}

console.log(rand());

function excuse() {
  let result = rand(who) + ' ' + rand(what) + ' ' + rand(when);
  return result;
}


function agrega() {
  return text.innerText = excuse();
}