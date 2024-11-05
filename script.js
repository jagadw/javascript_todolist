const addButton = document.querySelector('.addButton');
const todoList = document.querySelector('.todo_list');
const newTaskInput = document.querySelector('.newtask');
const newTimeInput = document.querySelector('.newtime');
const addTodoMenu = document.querySelector('#addtodomenu');
const closeButton = document.querySelector('#button-x a');

// Tampilkan task menu
addButton.addEventListener('click', () => {
addTodoMenu.style.display = 'flex';
});

// Sembunyikan task menu
closeButton.addEventListener('click', () => {
addTodoMenu.style.display = 'none';
});

// Nambah task ke list
function addTask() {

const title = newTaskInput.value;
const time = newTimeInput.value;

if (title === '' || time === '') {
    alert('Please enter a task and a time!');
    return;
}

// Buat task item baru
const taskItem = document.createElement('div');
taskItem.classList.add('listItem');

// Buat task content
const taskContent = document.createElement('p');
taskContent.innerHTML = `${title}<br><small>${time}</small>`;
taskItem.appendChild(taskContent);

// Buat delete button
const deleteButton = document.createElement('a');
deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
deleteButton.href = '#';
deleteButton.addEventListener('click', () => {
    todoList.removeChild(taskItem);
});
taskItem.appendChild(deleteButton);

// Buat checkbox
const checkbox = document.createElement('span');
checkbox.addEventListener('click', () => {
    taskItem.classList.toggle('complete');
});
taskItem.appendChild(checkbox);

// Nambah task item ke list
todoList.appendChild(taskItem);

newTaskInput.value = '';
newTimeInput.value = '';

// Nutup task menu
addTodoMenu.style.display = 'none';

}

// Nambah new task dari submit form
const form = addTodoMenu.querySelector('form');
form.addEventListener('submit', event => {
event.preventDefault();
addTask();
});

// Tanggal, bulan, tahun
const date = new Date();
const day = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
document.querySelector('#day').textContent = day;
document.querySelector('#month').textContent = month;
document.querySelector('#year').textContent = year;

// Jam Realtime
function updateTime() {
    var now = new Date();
    var hour = now.getHours().toString().padStart(2, '0');
    var minute = now.getMinutes().toString().padStart(2, '0');
    var second = now.getSeconds().toString().padStart(2, '0');
    var timeString = hour + ':' + minute + ':' + second;
    document.getElementById('time').textContent = timeString;
}
setInterval(updateTime, 1000);