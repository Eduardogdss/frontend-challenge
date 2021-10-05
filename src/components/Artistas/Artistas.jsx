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
    }
    useEffect(() => {  
        (search.length > 4 ) ? (
            fetchArtists()
            ) : (
            setEnable(0)
            );
    },[search])

    return (enable===1) ? (
        <>
            <div className={styles.cards}>
                {artists.length<1 && <h1>Nenhum artista encontrado!</h1>}
                {loading && <h1> Carregando ...</h1>}
                {error && <h1>{error}</h1>}
                {artists && artists.map((artist) => <ArtistCard key={artist.id} name={artist.name} src={artist.images[0] ? artist.images[0].url : ''}/> )} 
            </div>
        </>
        ) : (
            <h1> Ainda não digitou 5 </h1>
        )
}
export default Artistas