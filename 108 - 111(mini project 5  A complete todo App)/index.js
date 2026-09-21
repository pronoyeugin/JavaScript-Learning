import { Todo } from './todo.js';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#list');
const message = document.querySelector('#message');

// show message
const showMessage = (text, type = 'success') => {
    message.textContent = text;
    message.className = type === 'danger' ? 'bg-danger' : 'bg-success';

    setTimeout(() => {
        message.textContent = '';
        message.className = '';
    }, 1000);
};

// get/save todos from local storage
const getTodosFromLocalStorage = () => {
    return localStorage.getItem('mytodos') ? JSON.parse(localStorage.getItem('mytodos')) : [];
};

const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('mytodos', JSON.stringify(todos));
};

// create todo element
const createTodo = (newTodo) => {
    const todoItem = document.createElement('li');
    todoItem.id = newTodo.id;
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="todo-text">${newTodo.value}</span>
        <button type="button" class="delete-btn" aria-label="Delete todo">
            <i class="fas fa-trash"></i>
        </button>
    `;

    todoList.appendChild(todoItem);

    const deleteButton = todoItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        const todos = getTodosFromLocalStorage();
        const updatedTodos = todos.filter((todo) => todo.id !== newTodo.id);
        saveTodosToLocalStorage(updatedTodos);

        todoList.removeChild(todoItem);
        showMessage('todo deleted successfully', 'danger');
    });
};

//load todos
const loadTodos = () => {
    const todos = getTodosFromLocalStorage();
    todos.forEach((todo) => {
        createTodo(todo);
    });
};

//addtodo function
const addTodo = (event) => {
    event.preventDefault();
    const todovalue = todoInput.value.trim();

    if (!todovalue) {
        showMessage('Please enter a todo', 'danger');
        return;
    }

    // unique id
    const todoId = Date.now().toString();

    const newTodo = new Todo(todoId, todovalue);
    
    const todos = getTodosFromLocalStorage();
    todos.push(newTodo);
    saveTodosToLocalStorage(todos);

    createTodo(newTodo);
    showMessage('todo added successfully', 'success');
    todoInput.value = '';
};

loadTodos();

// add listener
 todoForm.addEventListener('submit', addTodo);