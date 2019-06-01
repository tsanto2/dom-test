const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "THIS IS THE GLORIOUS TEXT CONTENT.";

container.appendChild(content);

let redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = "Hey, I'm red!";

content.appendChild(redPara);

let blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue H3!";

content.appendChild(blueH3);

let fancyDiv = document.createElement('div');
fancyDiv.setAttribute('id', 'fancyDiv');
fancyDiv.style.cssText = 'border-style: dotted; border-color: black; border-width: 5px; background: pink;';

let newH1 = document.createElement('h1');
newH1.textContent = "I'm in a fancy fuckin' div bro.";

let newP = document.createElement('p');
newP.textContent = "Me too, cunto.";

fancyDiv.appendChild(newH1);
fancyDiv.appendChild(newP);

container.appendChild(fancyDiv);