'use strict';

let fname = prompt('Введите ваше имя', 'first name');
let sname = prompt('Введите вашу фамилию', 'last name');
let tname = prompt('Введите ваше отчество', 'patronymic');

alert(`Ваше имя ${fname}`);
alert(`Ваша фамилия ${sname}`);
alert(`Ваше отчество ${tname}`);

let isTrue = confirm('Это действительно ваше ФИО?');
alert(isTrue);