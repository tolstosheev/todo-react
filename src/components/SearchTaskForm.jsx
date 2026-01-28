import Field from "./Field";

const SearchTaskForm = (props) => {
    const {
        onSearchInput,
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
                onInput={({target}) => onSearchInput(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm