import {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";
import useTasksLocaleStorage from "./useTasksLocaleStorage";

const useTasks = () => {
    const {
        savedTasks,
        saveTasks
    } = useTasksLocaleStorage()

    const [tasks, setTasks] = useState(savedTasks ?? [
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true},
        {id: 'task-3', title: 'Task 3', isDone: false},
    ]);

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const newTaskInputRef = useRef(null);

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

    const addTask = useCallback((title) => {
        const newTask = {
            id: crypto?.randomUUID() ?? Date.now().toString(),
            title,
            isDone: false,
        }
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setNewTaskTitle("");
        setSearchQuery("");
        newTaskInputRef.current.focus();
    }, [])

    useEffect(() => {
        newTaskInputRef.current.focus();
    }, []);

    useEffect(() => {
        saveTasks(tasks)
    }, [tasks])

    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase()
        return clearSearchQuery.length > 0
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks]);

    return {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        setSearchQuery,
        searchQuery,
        newTaskInputRef,
    }
}

export default useTasks;