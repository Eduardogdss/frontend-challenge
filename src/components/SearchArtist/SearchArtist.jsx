import { Artistas } from 'components';
import React, {useState} from 'react'


const SearchArtist = () =>{

    const [search, setSearch] = useState('');
    
    return (
        <>
            <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value) }
            />
            <Artistas search={search}/>   
        </>
    )
}

export default SearchArtist