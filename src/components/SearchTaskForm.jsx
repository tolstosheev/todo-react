import Field from "./Field";

const SearchTaskForm = (props) => {
    const {
        searchQuery,
        setSearchQuery
    } = props;

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