/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };

// const  a = prompt('Один из последних просмотренных фильмов?',''),
//        b = prompt('На сколько оцените его?',''),
//        c = prompt('Один из последних просмотренных фильмов?',''),
//        d = prompt('На сколько оцените его?','');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };





// for(let i = 0; i < 2; i++){
//     const  a = prompt('Один из последних просмотренных фильмов?',''),
//            b = prompt('На сколько оцените его?','');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done')  
//     } else{
//         console.log('err');
//         i--;
//     }
  
// }
// if ( personalMovieDB.count < 10){
//     console.log("Просмотрено довольно мало фильмов");
// }
// else if( personalMovieDB.count >= 10 &&   personalMovieDB.count < 30){
//     console.log("Вы классический зритель");
// }
// else if(personalMovieDB.count >=30){
//     console.log("Вы киноман");
// }
// else{
//     console.log("Произошла ошибка");
// }

// console.log(personalMovieDB);

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


//  let numberOfFilms ;

//  function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//  }
//  start();
// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false
// };


// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){
//         const  a = prompt('Один из последних просмотренных фильмов?',''),
//                b = prompt('На сколько оцените его?','');
//         if(a != null && b != null && a != '' && b != '' && a.length < 50){
//             personalMovieDB.movies[a] = b;
//             console.log('done')  
//         } else{
//             console.log('err');
//             i--;
//         }
      
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel(){
//     if ( personalMovieDB.count < 10){
//         console.log("Просмотрено довольно мало фильмов");
//     }
//     else if( personalMovieDB.count >= 10 &&   personalMovieDB.count < 30){
//         console.log("Вы классический зритель");
//     }
//     else if(personalMovieDB.count >=30){
//         console.log("Вы киноман");
//     }
//     else{
//         console.log("Произошла ошибка");
//     }
    
// }
// detectPersonalLevel();

// function showMyDB(hidden){
// if(!hidden){
//     console.log(personalMovieDB);
//  }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for(let i = 1; i <= 3; i++){
       
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();

// const options = {
//     name: 'test',
//     whidth: 1024,
//     height: 1024,
//     color:{
//         border: 'black',
//         bg:'red' 
//     },
//     makeTest: function(){
//         console.log("test");
//     }
// };
// console.log(options["color"]["border"]);
// delete options.name;
// console.log(options);

// let counter = 0;

// for(let key in options){
//     if(typeof(options[key])=== 'object'){
//         for(let i in options[key]){
//             console.log(`Cвойство ${i} имеет значение ${options[key][i]}`)
           
// }
//         }else{
//             console.log(`Cвойство ${key} имеет значение ${options[key]}`);
//             counter++;
//         }
//     }
//     console.log(counter);
// options.makeTest();
// const {border,bg} = options.color;
// console.log(border);
// console.log(Object.keys(options).length)
// const arr = [1, 2, 3, 4, 5, 6];

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри масива ${arr}`)

// })
// console.log(arr);
// const str = prompt(" "," ");
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '))

// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }
// for( let value of arr){
//     console.log(value)
// }
// const obj = {
//     a: 5,
//     b:1
// };
// const copy = obj;
// copy.a = 10;

// console.log(copy);
// console.log(obj);


// function copy(mainOnj){
//  let objCopy = {};
//  let key;
//  for(key in mainOnj){
//      objCopy[key] = mainOnj[key];
//  }
//  return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// const newNunders = copy(numbers);
// newNunders.a = 10;
// console.log(newNunders);
// console.log(numbers);
// const numbers = {
//     a: 2,
//     b: 5,
//     c:{
//         x:7,
//         y:4
//     }
// };
// const add = {
//     d:17,
//     e: 20
// };
// console.log (Object.assign(numbers, add));

// const oldArray  = ['a', 'b', 'c'];
// const newAraay = oldArray.slice();
// newAraay[1]= "asdsaddas"
// console.log(newAraay);
// console.log(oldArray);
 
// const video = ['youyube', 'vimeo', 'rutube'],
//       blogs=['wp', 'bloger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];
// console.log(internet);
// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
// const soldat = {
//     health: 400,
//     armor: 100
// }
// const jonh = Object.create(soldat)

// const jonh = {
//     health: 100
// }
// Object.setPrototypeOf(jonh, soldat);
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания
'use strict';

// Возьмите свой код из предыдущей практики
 
// const personalMovieDB = {

//     count:0,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN( personalMovieDB.count)){
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//      },
//      rememberMyFilms: function(){
//         for(let i = 0; i < 2; i++){
//             const  a = prompt('Один из последних просмотренных фильмов?',''),
//                    b = prompt('На сколько оцените его?','');
//             if(a != null && b != null && a != '' && b != '' && a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log('done')  
//             } else{
//                 console.log('err');
//                 i--;
//             }
          
//         }
//     },
//     detectPersonalLevel:function(){
//         if ( personalMovieDB.count < 10){
//             console.log("Просмотрено довольно мало фильмов");
//         }
//         else if( personalMovieDB.count >= 10 &&   personalMovieDB.count < 30){
//             console.log("Вы классический зритель");
//         }
//         else if(personalMovieDB.count >=30){
//             console.log("Вы киноман");
//         }
//         else{
//             console.log("Произошла ошибка");
//         }
        
//     },
//     showMyDB: function (hidden){
//         if(!hidden){
//             console.log(personalMovieDB);
//          }
//         },
//     toggleVisibleMyDB: function(){
//         if(personalMovieDB.privat){
//             personalMovieDB.privat = false;
//         }else{
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function(){
//             for(let i = 1; i < 2; i++){
//             //  let gener =prompt(`Ваш любимый жанр под номером ${i}`);
//             //    if(gener == '' || gener == null){
//             //       console.log("Вы ввели не правдивые данные");
//             //       i--;
//             //      }else{
//             //         personalMovieDB.genres[i - 1] = gener;
//             //      }
//             let geners =prompt(`Ведите ваши жанры через запятую ${i}`.toLocaleLowerCase());
//             if(geners == '' || geners == null){
//                       console.log("Вы ввели не правдивые данные");
//                       i--;
//                      }else{
//                         personalMovieDB.genres =geners.split(', ') ;
//                         personalMovieDB.genres.sort();
//                      }
//             }
//             personalMovieDB.genres.forEach((item, i)=>{
//                 console.log(`Любимый жанр ${i + 1} - это ${item}`)
//             }); 
//         },
   
// };






