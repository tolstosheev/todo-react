import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import {useEffect, useState, useRef, useCallback, useMemo} from "react";
import Button from "./Button";

const Todo = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [
            {id: 'task-1', title: 'Task 1', isDone: false},
            {id: 'task-2', title: 'Task 2', isDone: true},
            {id: 'task-3', title: 'Task 3', isDone: false},
        ]
    });
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const newTaskInputRef = useRef(null);
    const firstIncompleteTaskRef = useRef(null);
    const firstIncompleteTaskId = tasks.find(({isDone}) => !isDone)?.id;

    const deleteAllTasks = useCallback(() => {
        const isConfirmed = confirm("Are you sure you want to delete all tasks?");

        if (isConfirmed) {
            setTasks([])
        }
    }, [])

    const deleteTask = useCallback((taskId) => {
        setTasks(
            tasks.filter(task => task.id !== taskId)
        )
    }, [tasks])

    const toggleTaskComplete = useCallback((taskId, isDone) => {
        setTasks(
            tasks.map(task => {
                if (task.id === taskId) {
                    return {...task, isDone};
                }

                return task
            }))
    }, [tasks])

    const addTask = useCallback(() => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }
            setTasks((prevTasks) => [...prevTasks, newTask]);
            setNewTaskTitle("");
            setSearchQuery("");
            newTaskInputRef.current.focus();
        }
    }, [newTaskTitle])

    useEffect(() => {
        newTaskInputRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])


    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks]);

    const doneTasks = useMemo(() => {
        return tasks.filter(({isDone}) => isDone).length
    }, [tasks])
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                newTaskInputRef={newTaskInputRef}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo
                total={tasks.length}
                done={doneTasks}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: "smooth"})}>
                    Show first incomplete task
            </Button>
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
                filteredTasks={filteredTasks}
                firstIncompleteTaskRef={firstIncompleteTaskRef}
                firstIncompleteTaskId ={firstIncompleteTaskId}
            />
        </div>
    )
}

export default Todo;

