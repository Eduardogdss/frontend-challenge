import React, {useEffect, useState} from 'react'
import {ArtistCard} from 'components'
import {SomosClient} from 'utils'
import styles from './Artistas.module.css'


const Artistas = (props) => {
    const {search} = props;
    const [enable, setEnable] = useState(0);
    const [artists, setArtists] = useState([]);
    const [error, setError] = useState(null);
    const somosClient = new SomosClient();
    const [loading, setLoading] = useState(null);
    let timeout;

    async function fetchArtists(){   
        setLoading(true);
        await somosClient.getArtists(search)
            .then(data =>{
                if (!data.error){
                    setArtists(data.artists.items);
                    setEnable(1);
                    setError(null);
                    setLoading(false);
                }else{
                    setEnable(1);
                    setArtists([]);
                    setError(data.error.message);
                    setLoading(false);
                }
            })
            .catch(err => {
                setEnable(1);
                setArtists([]);
                setError(err.message);
                setLoading(false);
            })
    };
    
    useEffect(() => {  
        clearTimeout(timeout);
        timeout = setTimeout(() => {  
            (search.length > 4 ) ? (
                fetchArtists()
                ) : (
                setEnable(0)
                );
        }, 500);
    },[search])

    return (enable===1) ? (
        <>               
            <div className={styles.wrapper}>
                {artists.length<1 && <h1>Nenhum artista encontrado!</h1>}
                {loading && <h1> Carregando ...</h1>}
                {error && <h1>{error}</h1>}
            </div>
            <div className={styles.grid}>
                {artists && artists.map((artist) => <ArtistCard id={artist.id} key={artist.id} name={artist.name} src={artist.images[0] ? artist.images[0].url : ''}/> )} 
            </div>
        </>
        ) : (
            <>
                <div className={styles.wrapper}>
                    <h1> Faça sua pesquisa! </h1>     
                </div>
            </>
        )
}
export default Artistas