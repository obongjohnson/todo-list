// Implement the TodoList class
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.nextId = 1;
    }
    // Add a new todo item
    TodoList.prototype.addTodo = function (task, dueDate) {
        var newTodo = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate
        };
        this.todos.push(newTodo);
    };
    // Mark a todo item as completed
    TodoList.prototype.completeTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.completed = true;
        }
        else {
            console.log("Todo with id ".concat(id, " not found."));
        }
    };
    // Remove a todo item
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    // List all todo items
    TodoList.prototype.listTodos = function () {
        return this.todos;
    };
    // Filter todos by completed status
    TodoList.prototype.filterTodos = function (completed) {
        return this.todos.filter(function (todo) { return todo.completed === completed; });
    };
    // Update task description
    TodoList.prototype.updateTask = function (id, newTask) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.log("Todo with id ".concat(id, " not found."));
        }
    };
    // Clear all completed todos
    TodoList.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) { return !todo.completed; });
    };
    return TodoList;
}());
// Example usage
var myTodoList = new TodoList();
myTodoList.addTodo("Buy groceries", new Date("2025-03-05"));
myTodoList.addTodo("Complete TypeScript project", new Date("2025-03-10"));
myTodoList.addTodo("Go for a walk", new Date("2025-03-03"));
console.log("All Todos:", myTodoList.listTodos());
myTodoList.completeTodo(2);
console.log("After completing todo 2:", myTodoList.listTodos());
myTodoList.updateTask(1, "Buy groceries and cook dinner");
console.log("After updating todo 1:", myTodoList.listTodos());
console.log("Incomplete Todos:", myTodoList.filterTodos(false));
console.log("Completed Todos:", myTodoList.filterTodos(true));
myTodoList.clearCompleted();
console.log("After clearing completed todos:", myTodoList.listTodos());
