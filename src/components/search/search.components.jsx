const Search = ({searchField, onChangeHandler}) => {
    return (
        <input className='coin-search' type='search' placeholder='Search' value={searchField} onChange={onChangeHandler} />
    )
}

export default Search;