// Define the TodoItem interface with the new dueDate property
interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

// Implement the TodoList class
class TodoList {
    private todos: TodoItem[] = [];
    private nextId = 1;

    // Add a new todo item
    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task: task,
            completed: false,
            dueDate: dueDate
        };
        this.todos.push(newTodo);
    }

    // Mark a todo item as completed
    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

    // Remove a todo item
    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    // List all todo items
    listTodos(): TodoItem[] {
        return this.todos;
    }

    // Filter todos by completed status
    filterTodos(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    // Update task description
    updateTask(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.log(`Todo with id ${id} not found.`);
        }
    }

    // Clear all completed todos
    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}

// Example usage
const myTodoList = new TodoList();

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
