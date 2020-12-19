/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded',() =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster =  document.querySelector('.promo__bg'),
          gener = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          btn = addForm.querySelector('button'),
          input = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector('[type="checkbox"]');
   
    const deleteAdv = (arr) =>{
        adv.forEach(item =>{
            item.remove();
        });
    };
    
    const makeChange = () =>{
        gener.textContent = 'драма';
        poster.style.backgroundImage = 'url(./img/bg.jpg)';
    };
   

    const sortArr = (arr) =>{
       arr.sort();
    };
  
   
   
    function createMovieLits(films, parent){
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML +=  `
            <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
            </li>
           `;
           
        });
        document.querySelectorAll('.delete').forEach((btn,i) =>{
            btn.addEventListener('click',() =>{
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieLits(films, parent);
            })
        });
    };
    
   
    addForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let newFilm = input.value;
        const favorite = checkBox.checked;
        e.target.reset();
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieLits(movieDB.movies, movieList);
        };
        if(favorite){
            console.log("Добавляем любимый фильм")
        };
       
    });
    
    
    makeChange();
    deleteAdv(adv);
    createMovieLits(movieDB.movies, movieList);
})