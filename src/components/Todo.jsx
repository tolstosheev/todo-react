import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import {jquery} from "globals";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true},
        {id: 'task-3', title: 'Task 3', isDone: false},
    ]

    const deleteAllTasks = () => {
        console.log('Delete all')
    }

    const deleteTask = (taskId) => {
        console.log(`Delete task with id: ${taskId}`);
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task with id: ${taskId} ${isDone ? 'completed' : 'not completed'}`);
    }

    const filterTask = (query) => {
        console.log(`Search: ${query}`);
    }

    const addTask = () => {
        console.log("Add new task");
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
            />
            <SearchTaskForm
                onSearchInput={filterTask}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo;

