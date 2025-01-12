const taskField = document.getElementById('todoTitle');
const taskButton = document.getElementById('addTask');
const taskList = document.querySelector('.task-list');

function addNewTask() {
  const task = taskField.value.trim();

  const taskItem = document.createElement('div');
  taskItem.className = 'task-item';

  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';

  const taskTitle = document.createElement('h3');
  taskTitle.textContent = task;
  const taskStatus = document.createElement('span');
  taskStatus.className = 'status in-progress';
  taskStatus.textContent = 'No Started';

  //   Appedning in inside the parent div
  taskInfo.appendChild(taskTitle);
  taskInfo.appendChild(taskStatus);

  const options = ['No Started', 'In Progress', 'Completed'];
  const selectField = document.createElement('select');

  options.forEach((element) => {
    const option = document.createElement('option');
    option.value = element.split(' ').join('-').toLocaleLowerCase();
    option.textContent = element;
    selectField.appendChild(option);
  });

  // Onchange select option
  selectField.addEventListener('change', (e) => {
    let value = e.target.value;
    taskStatus.textContent = value;
    console.log(value, 'frm the value ');
    taskStatus.className = `status ${value}`;
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'Del';

  // Remove the task Item
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  //   Appedning in inside the parent div for item
  taskItem.appendChild(taskInfo);
  taskItem.appendChild(selectField);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);

  taskField.value = '';
}
// Once we click task should be submitted
taskButton.addEventListener('click', addNewTask);

taskField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addNewTask();
  }
});
