import {memo} from 'react'
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {
        tasks = [],
        filteredTasks,
        onDeleteTaskButtonClick,
        onTaskCompleteChange,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
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
                    ref={task.id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}
                    {...task}
                />
            ))}
        </ul>
    )
}

export default memo(TodoList);