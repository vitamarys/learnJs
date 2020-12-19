'use strict';


const box = document.getElementById('box');

const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');

// hearts.forEach(item =>{
//     console.log(item);
// })
// box.style.backgroundColor = 'green';
// box.style.width = '500px';
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor ='red';
box.style.cssText = 'background-color: blue; width:500px;'

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor ='blue'
// }
hearts.forEach(item =>{
    item.style.backgroundColor ='blue';
});

const div = document.createElement('div');
div.classList.add('black');
wrapper.append(div);
// hearts[0].after(div);
// circles[0].remove();
div.innerHTML = 'heloo wo';
div.insertAdjacentHTML('beforebegin','<h2>hello</h2>')