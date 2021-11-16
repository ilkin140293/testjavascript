// ---------------------------------------------------------------------------
//   Практика 1
// ---------------------------------------------------------------------------

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

// const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// alert(numbersOfFilms);

// const personalMovieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// ---------------------------------------------------------------------------
//   Практика 2
// ---------------------------------------------------------------------------

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/


// "use strict"

// const numbersOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// for (let i = 1; i <= numbersOfFilms; i++) {
//   const a = prompt('Напишите название фильма', ''),
//     b = prompt('На сколько оцените его?', '');

//   if (a.length == 0 || a == null || a == '') {
//     alert('Пустое название, введите название фильма');
//     i--;
//   } else if (a.length >= 50) {
//     alert('Слишком длинное навание фильма, ведите короче');
//     i--;
//   } else if (b.length == 0) {
//     alert('Вы не оценили фильм');
//     i--;
//   } else {
//     personalMovieDB.movies[a] = b;
//   }
// }

// if (numbersOfFilms >= 1 && numbersOfFilms < 10) {
//   alert('Просмотрено довольно мало фильмов');
// } else if (numbersOfFilms >= 10 && numbersOfFilms <= 30) {
//   alert('Вы классический зритель');
// } else if (numbersOfFilms > 30) {
//   alert('Вы киноман');
// } else {
//   alert('Произошла ошибка');
// }

// console.log(personalMovieDB);

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// ---------------------------------------------------------------------------
//   Практика 3
// ---------------------------------------------------------------------------

