
//База данных по студентам
//Поля:
//- ФИО (текст);
//- специальность (текст);
//- возраст (число);
//- ежемесячная стипендия (сколько в месяц получает) (число);
//- сколько семестров учится (число);
//- РАССЧИТЫВАЕМОЕ - сумма полученной стипендии за время обучения (семестр состоит из 5 месяцев).
//Поиск по полю: ФИО.
//Сортировка по полям: специальность, возраст, ФИО.
//Статистика: средняя стипендия, сумма выплаченных стипендий.

//База данных должна реализовывать в себе следующие возможности:
//- добавление записей;
//- удаление записей;
//- редактирование записей;
//- просмотр записей;
//- сортировка;
//- поиск;
//- статистические расчёты;
//- реально сохранять данные (в файлах/серверах/СУБД) не нужно!

//Взаимодействие с программой на Frontend:
//- ввод данных через prompt;
//- вызов действий через кнопки (у кнопок атрибут onclick, в который можно указать функцию)
//- кнопки нужно вывести через document.write, например document.write('<button onclick="add()">Добавить</button>')

//Взаимодействие с программой на Backend:
//- весь код программы хранится в функции main();
//- ввод данных через функцию await prompt() (для плюса +(await prompt()) );
//- после каждого действия, программа ожидает следующей команды (while (true) {});
//- вызов действий осуществляется вводом соответствующих команд: add, remove, edit, list, sort, search, stats;

//База данных представлена массивом объектов. Описание функций:
//1. добавление записи:
//1.1. пользователь вызывает функцию добавления;
//1.2. программа запрашивает данные с клавиатуры отдельно для каждого поля сущности (объекта);
//1.3. программа присваивает уникальный номер (id) и записывает объект;

//2. удаление записи:
//2.1. пользователь вызывает функцию;
//2.2. программа запрашивает id записи с клавиатуры;
//2.3. программа удаляет запись.

//3. редактирование записи:
//3.1. пользователь вызывает функцию;
//3.2. программа запрашивает id записи с клавиатуры;
//3.3. программа предлагает ввести новые значения для каждого поля отдельно с клавиатуры;
//3.4. если пользователь ничего не ввел, но нажал "ок" или клавишу "Enter", то значение этого поля остаётся прежним.

//4. Просмотр записей:
//4.1. пользователь вызывает функцию;
//4.2. на экране отображаются все записи. Примечание: "рассчитываемое поле" должно рассчитываться при отображении, но не храниться в поле объекта

//5. Сортировка:
//5.1. пользователь вызывает функцию;
//5.2. происходит сортировка сразу по всем полям, указанным в задании для конкретного варианта. Пример: "поле 1, поле 2, поле 3" -- сортируем по полю 1, потом отсортированный список по полю 2, не нарушая сортировки поля 1, аналогично для поля 3. Использовать метод массива .sort(). (для сравнения строк в алфавитном порядке можно использовать операторы >, <)

//6. Поиск:
//6.1. пользователь вызывает функцию;
//6.2. происходит строковый (текстовый) поиск по полю, указанному в задании для конкретного варианта, с помощью метода .indexOf() строки
//6.3. на экран выводятся записи, подходящие под условие.

//7. Статистические расчёты:
//7.1. пользователь вызывает функцию;
//7.2. выполняются расчёты, указанные в задании для конкретного варианта. Пример: среднее арифметическое. 




let btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    btn3 = document.getElementById('btn3'),
    btn4 = document.getElementById('btn4');


//let button = document.querySelector('button');

let mass = [];


function addStudInfo() {
   let studName = prompt('Ваше ФИО?');
   let studSpeciality = prompt('Специальность?');
   let studAge = +prompt('Ваш возраст?');
   let studGrant = +prompt('Стипендия в месяц?');
   let studStudy = +prompt('Сколько семестров учитесь?');

   let inform = {
      fio : studName,
      speciality : studSpeciality,
      age : studAge,
      grant : studGrant,
      study: studStudy,
   };

   mass.push(inform);

   alert(`Вы добавили пользователя. ФИО - ${studName}, Специальность - ${studSpeciality}, Возраст - ${studAge}, Стипендия - ${studGrant}, Семестры - ${studStudy}, `);
   
};

function delInfo(){
   let index = +prompt('Какой элемент удалить?');
   if ( index > mass.length && index < 0){
      alert('Такого элемента нет')
   } else {
      const name = mass[index].fio;
      mass.splice(index, 1);
      alert(`Вы удалили пользователя ${name}`);
   }
   
};

function editInfo(){
   let index = +prompt('Какой элемент редактировать?');
   if (index > mass.length && index < 0){
      alert ('Такого индекса нет')
   } else {
      let fieldName = prompt('Введите имя поля');
      let value = prompt('Введите значение');
      switch (fieldName) {
         case 'fio':
           mass[index].fio = value;
         alert(`Вы изменили ФИО на - ${value}`);
            break;
         case 'speciality':
           mass[index].speciality = value;
           alert(`Вы изменили Специальность на - ${value}`);
           break;
         case 'age':
           mass[index].age = parseInt(value);
           alert(`Вы изменили Возраст на - ${value}`);
           break;
         case 'grant':
           mass[index].grant = parseInt(value);
           alert(`Вы изменили Стипендию на - ${value}`);
           break;
         case 'study':
           mass[index].study = parseInt(value);
           alert(`Вы изменили Семестры на - ${value}`);
           break;
         default : alert ('sosi');
       };
   };
};

function listAll() {
   for (i = 0; i < mass.length; i++ ){
      document.write(JSON.stringify(mass[i], null, 4));
   }
};

btn1.onclick = addStudInfo;
btn2.onclick = delInfo;
btn3.onclick = editInfo;
btn4.onclick = listAll;


function print(x) {
   const container = document.getElementById('container');
   container.innerHTML += x;
};































//document.getElementById('res').innerHTML = html;
//document.write(studName);

//function print(x) {
//   const container = document.getElementById('container');
//   container.innerHTML += infrm;
//}
//let student = {
//   name = prompt('Fio'),
//   speciality = prompt ('speciality'),
//   extra : {
//      add: function (addStudInfo) {
//         document.write(zz);
//      }
//   },
//};

//student.add();
//console.log(student.speciality);

//btn1.onclick = addStudInfo;

// btn2.onclick = addStudInfo;


