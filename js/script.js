"use strict";

//LISTA IMMAGINI
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];

const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs-content');

//DEFINIZIONE VARIABILI
let itemsContent = '';
let thumbsContent = '';

//DEFINIZIONE INDICE ARRAY PER IMMAGINE ATTIVA
let activeItem= 0;

//DEFINIZIONE FRECCE CAMBIO IMMAGINE
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

//CICLO FOR array
for (let i=0; i<images.length; i++){
    itemsContent += `<div class="item">
                        <img src="./${images[i]}">
                    </div>`;

    thumbsContent += `<div class="thumb">
                        <img src="./${images[i]}">
                    </div>`;
}

//INSERIMENTO HTML 
items.innerHTML = itemsContent;
thumbs.innerHTML = thumbsContent;

//APPLICO VARIABILE ACTIVE ITEM
document.getElementsByClassName('item')[activeItem].classList.add('active');
document.getElementsByClassName('thumb')[activeItem].classList.add('active');

//LISTENER PER CLICK SU PREV
prev.addEventListener('click', function(){
    if(activeItem === 0){
        activeItem = images.length - 1;
    }
    else{
        activeItem--;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active');
});

//LISTENER PER CLICK SU NEXT
next.addEventListener('click', function(){
    if(activeItem === images.length - 1){
        activeItem = 0;
    }
    else{
        activeItem++;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItem].classList.add('active')

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItem].classList.add('active')
});