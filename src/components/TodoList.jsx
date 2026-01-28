import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {
        tasks = [],
        filteredTasks,
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
    } = props;

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if (!hasTasks) {
        return <div className="todo__empty-message">There are no tasks yet</div>;
    }

    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Tasks not founded</div>;
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                    className="todo__item"
                    key={task.id}
                    {...task}
                />
            ))}
        </ul>
    )
}

export default TodoList;