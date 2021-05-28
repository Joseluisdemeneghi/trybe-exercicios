function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysList() {
  let daySelector = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayType = document.createElement('li');

    if (day === 24 | day === 31) {
      dayType.className = 'day holiday';
      dayType.innerHTML = day;
      daySelector.appendChild(dayType);
    } else if (day === 4 | day === 11 | day === 18) {
      dayType.className = 'day friday';
      dayType.innerHTML = day;
      daySelector.appendChild(dayType);
    } else if (day === 25) {
      dayType.className = 'day holiday friday';
      dayType.innerHTML = day;
      daySelector.appendChild(dayType);
    } else {
      dayType.innerHTML = day;
      dayType.className = 'day';
      daySelector.appendChild(dayType);
    }
  };
};

daysList();

function button(buttonName) {
  let buttonFather = document.querySelector('.buttons-container');
  let buttonHoliday = document.createElement('button');
  let buttonID = 'btn-holiday';

  buttonHoliday.innerHTML = buttonName;
  buttonHoliday.id = buttonID;
  buttonFather.appendChild(buttonHoliday);
};

button('Feriados');

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();

function fridayButton(buttonName) {
  let buttonFather = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  let buttonFridayID = 'btn-friday';

  buttonFriday.innerHTML = buttonName;
  buttonFriday.id = buttonFridayID;
  buttonFather.appendChild(buttonFriday);
};

fridayButton('Sexta-feira');

function showFriday() {
  let fridayClick = document.querySelector('#btn-friday');
  let allFridays = document.querySelectorAll('.friday')
  let backgroundColor = 'rgb(238,238,238)';
  let changeColor = 'white';

  fridayClick.addEventListener('click', function() {
    for (let index = 0; index < allFridays.length; index += 1) {
      if (allFridays[index].style.backgroundColor === changeColor) {
        allFridays[index].style.backgroundColor = backgroundColor;
      } else {
        allFridays[index].style.backgroundColor = changeColor;
      }
    }
  })
};

showFriday();

function zoomIn() {
  let dayZoom = document.querySelector('#days');

  dayZoom.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '35px';
  })
};

function zoomOut() {
  let dayZoomOut = document.querySelector('#days');
  dayZoomOut.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  }) 
};

zoomIn();
zoomOut();

function newTask(task) {
  let divFather = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  divFather.appendChild(taskName);
};

newTask('dormir');

function subtitle(cor) {
  let subFather = document.querySelector('.my-tasks');
  let legenda = document.createElement('div');

  legenda.className = 'task';
  legenda.style.backgroundColor = cor;
  subFather.appendChild(legenda);
};

subtitle('green');

function Select() {
  let taskSel = document.getElementsByClassName('task selected');
  let myTask = document.querySelector('.task');

  myTask.addEventListener('click', function(event) {
    if (taskSel.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

Select();