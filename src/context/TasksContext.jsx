import { createContext } from 'react'
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {
        children
    } = props;

    const {
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
    } = useTasks();

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
            value={{
                tasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                deleteTask,
                deleteAllTasks,
                toggleTaskComplete,
                addTask,
                newTaskTitle,
                setNewTaskTitle,
                setSearchQuery,
                searchQuery,
                newTaskInputRef,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}