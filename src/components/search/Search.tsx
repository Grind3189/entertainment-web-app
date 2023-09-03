import './search.scss'
import searchIcon from '../../assets/icons/icon-search.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router'

type SearchProp = {
    placeholder: string
}
const Search = ({ placeholder }: SearchProp) => {
    const [search, setSearch] = useState<string>('')
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const addToQuery = () => {
        navigate(`?search=${search}`)
    }
    return (
        <div className='search-container'>
            <img onClick={addToQuery} src={searchIcon} alt='Search icon' />
            <input type='text' value={search} placeholder={placeholder} onChange={handleChange} />
        </div>
    )
}

export default Search