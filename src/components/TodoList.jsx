import TodoItem from "./TodoItem";

const TodoList = () => {
    const hasTasks = true;

    if (!hasTasks) {
        return <div className="todo__empty-message"></div>;
    }

    return (
        <ul className="todo__list">
            <TodoItem/>
        </ul>
    )
}

export default TodoList;