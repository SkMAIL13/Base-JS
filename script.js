let btn1 = document.getElementById('btn1'),
   btn2 = document.getElementById('btn2'),
   btn3 = document.getElementById('btn3'),
   btn4 = document.getElementById('btn4');
   btn5 = document.getElementById('btn5');
   btn6 = document.getElementById('btn6');


function print(x) {
   const container = document.getElementById('container');
   container.innerHTML += x;
};

let mass = [];

let idCounter = 1;

function addStudInfo(studName, studSpeciality, studAge, studGrant, studStudy) {
   this.id = idCounter++;
   this.studName = studName;
   this.studSpeciality = studSpeciality;
   this.studAge = studAge;
   this.studGrant = +studGrant;
   this.studStudy = +studStudy;

   this.summa = function () {
      return this.studGrant * this.studStudy;
   };
}

function add() {
   let studName = prompt('Ваше ФИО?');
   let studSpeciality = prompt('Специальность?');
   let studAge = +prompt('Ваш возраст?');
   let studGrant = +prompt('Стипендия в месяц?');
   let studStudy = +prompt('Сколько семестров учитесь?');

   mass.push(new addStudInfo(studName, studSpeciality, studAge, studGrant, studStudy));
}

function delInfo() {
   let index = +prompt('Введите id');
   for (let i in mass) {
      if (arr[i].id === item) {
         delete (mass[i]);
      }
   }

   if (index > mass.length && index < 0) {
      alert('Такого элемента нет')
   } else {
      const name = mass[index].fio;
      mass.splice(index, 1);
      alert(`Вы удалили пользователя ${name}`);
   }

};

function editInfo() {
   let index = +prompt('Какой элемент редактировать?');
   if (index > mass.length && index < 0) {
      alert('Такого индекса нет')
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
         default: alert('sosi');
      };
   };
};

function listAll() {
   index = +prompt('Введите id');
   for (let i in mass) {
      if (mass[i].id == index) {
         print('<br>id: ' + mass[i].id + '<br>' + 'Имя: ' + mass[i].fio + '<br>' + 'Специальность: ' + mass[i].speciality + '<br>' + 'Возраст: ' + mass[i].age + '<br>' + 'Стипендия: ' + mass[i].grant + '<br>' + 'Кол-во семетров: ' + '<br>' + mass[i].study + '<br>' + 'ваша стипендия за обучение: ' + mass[i].summa() + '<br>');
      }
   }
   for (i = 0; i < mass.length; i++) {
      document.write(JSON.stringify(mass[i], null, 4));
   }
};

function sort() {
   mass.sort(function (a, b) {
      if (a.studName >= b.studName && a.studAge >= b.studAge && a.studSpeciality >= b.studSpeciality) {
         return 1;
      } else if (a.studName <= b.studName && a.studAge <= b.studAge && a.studSpeciality <= b.studSpeciality) {
         return -1;
      } else return 0;
   });
   show();
}

function stat() {
   let summa = 0;
   let cash = 0;
   for (i = 0; i < mass.length; i++) {
      summa = (mass[i].studGrant * mass[i].studStudy) * 5;
   }
   print('<br> Полученная сумма: ' + summa);
}

function search(id, item) {
   item = prompt('Введите ваш Id');
   for (let i in mass) {
      if (mass[i].id === item) {
         print('<br>id: ' + mass[i].id + '<br>' + 'Имя: ' + mass[i].fio + '<br>' + 'Специальность: ' + mass[i].speciality + '<br>' + 'Возраст: ' + mass[i].age + '<br>' + 'Стипендия: ' + mass[i].grant + '<br>' + 'Кол-во семетров: ' + '<br>' + mass[i].study + '<br>' + 'ваша стипендия за обучение: ' + mass[i].summa() + '<br>');
      }
   }
}



btn1.onclick = add;
btn2.onclick = delInfo;
btn3.onclick = editInfo;
btn4.onclick = listAll;
btn5.onclick = sort;
btn6.onclick = search;
