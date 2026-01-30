import Field from "./Field";
import Button from "./Button";
import {useContext} from "react";
import {TasksContext} from "../context/TasksContext";

const AddTaskForm = () => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = useContext(TasksContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTask();
    }

    return (
        <form
            className="todo__form"
            onSubmit={onSubmit}
        >
            <Field
                id='new-task'
                label='New task title'
                className='todo__field'
                value={newTaskTitle}
                onInput={({target}) => setNewTaskTitle(target.value)}
                ref={newTaskInputRef}
            />
            <Button
                type='submit'
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm;