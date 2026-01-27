import Field from "./Field";

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <Field
                id='search-task'
                label='Search task'
                className='todo__field'
                type='search'
            />
        </form>
    )
}

export default SearchTaskForm