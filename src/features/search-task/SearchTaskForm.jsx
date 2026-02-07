import Field from "@/shared/ui/Field";
import {useContext} from "react";
import {TasksContext} from "@/entities/todo";

const SearchTaskForm = (props) => {
    const {
        styles
    } = props

    const {
        searchQuery,
        setSearchQuery
    } = useContext(TasksContext);

    return (
        <form
            className={styles.form}
            onSubmit={(event) => event.preventDefault() }
        >
            <Field
                id='search-task'
                label='Search task'
                className={styles.field}
                type='search'
                value={searchQuery}
                onInput={({target}) => setSearchQuery(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm