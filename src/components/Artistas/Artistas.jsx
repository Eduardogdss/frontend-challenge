import React, {useEffect, useState} from 'react'
import {ArtistCard} from 'components'
import {SomosClient} from 'utils'
import styles from './Artistas.module.css'


const Artistas = (props) => {
    const {search} = props;
    const [enable, setEnable] = useState(0);
    const [artists, setArtists] = useState([]);
    const somosClient = new SomosClient();

    async function fetchArtists(){   
        let data = await somosClient.getArtists(search);  
        // const artistsList = data.map((artista) =>
        // <>

        //     <h1>{artista.name}</h1>
        //     <img height='100px' width = '100px' src={artista.images[0] ? artista.images[0].url : ''}/>
        // </>
        // ); 
        //setArtists(artistsList);

        setArtists(data);
        setEnable(1);
    }

    useEffect(() => {  
        (search.length > 4 ) ? (
            fetchArtists()
            ) : (
            setEnable(0)
            );
    },[search])


    // return (enable===1) ? (
    //     <React.Fragment>
    //         <div className={styles.cards}>
    //             {artists}
    //         </div>
    //     </React.Fragment>
    //     ) : (
    //         <h1> Ainda não digitou 5 </h1>
    //     )

    return (enable===1) ? (
        <>
            <div className={styles.cards}>
                {artists && artists.map((artist) => <ArtistCard key={artist.id} name={artist.name} src={artist.images[0] ? artist.images[0].url : ''}/> )} 
            </div>
        </>
        ) : (
            <h1> Ainda não digitou 5 </h1>
        )
}
export default Artistas