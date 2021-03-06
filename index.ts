// Import stylesheets
import './style.css';

//comentarios de multiplas linhas
/*Vários linhas
de comentário
 */

//Declaração de constantes
const myVar1: number = 42;
const myVar2: number = 42;
//Declaração de variáveis
let myVar3 = 42;
let myVar4: number = 42;
let myVar5: string = 'Olá';

let mySentence: string = `

blablablablabla blablablablablabla blablablablablabla blablablabla
blablablabla blablablabla blabla blablablabla

blablabla

`;

//Utilizando o console
console.log('Olá, Mundo!');

//Utilizando laços de repetição
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Utilizando condicionais
if (myVar1 % 2 == 0) {
  console.log(myVar1 + 'é PAR');
} else {
  console.log(myVar1 + 'é IMPAR');
}

//Declarando arrays
let list: Number[] = [1, 2, 3];

//Utilizando laços e condicionais
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let counter = 0;
let intervalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElemetById('counterDiv');
  counterDiv.innerHTML = 'Constador' + counter;
}, 1000);

let title: string = ' Olá, mundo!';
let paragraph: string = 'blablabla';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'><\div>
`;
