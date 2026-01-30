import Field from "./Field";
import {useContext} from "react";
import {TasksContext} from "../context/TasksContext";

const SearchTaskForm = () => {
    const {
        searchQuery,
        setSearchQuery
    } = useContext(TasksContext);

    return (
        <form
            className="todo__form"
            onSubmit={(event) => event.preventDefault() }
        >
            <Field
                id='search-task'
                label='Search task'
                className='todo__field'
                type='search'
                value={searchQuery}
                onInput={({target}) => setSearchQuery(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm