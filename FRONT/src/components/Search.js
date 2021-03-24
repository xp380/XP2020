import react, {useState} from 'react'

export default function Search(search){
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value)
    };

    const resetinputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = e => {
        e.preventDefault()
        search(searchValue)
        resetinputField()
    }

    return(
        <form className="search">
            <input 
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
        </form>
    )
}