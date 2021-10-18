import { Artistas } from 'components';
import React, {useState} from 'react'
import styles from './SearchArtist.module.css'

const SearchArtist = () =>{

    const [search, setSearch] = useState('');
    
    return (
        <>
            <div className={styles.wrapper}>
                <input 
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value) }
                className={styles.search}/>      
            </div>
                
            <Artistas search={search}/> 
                  

        </>
    )
}

export default SearchArtist