import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        newTaskInputRef,
    } = props;

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