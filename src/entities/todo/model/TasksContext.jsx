import { createContext } from 'react'
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

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
        disappearingTaskId,
        appearingTaskId
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
                disappearingTaskId,
                appearingTaskId,
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}