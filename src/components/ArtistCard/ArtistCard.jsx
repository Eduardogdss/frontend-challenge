import React from 'react'
import {PropTypes} from 'prop-types'

import { Link } from 'react-router-dom'
import styles from './ArtistCard.module.scss'
const ArtistCard = (props) => {
    const {id,name,src} = props;
    const facelessImage = 'http://www.w3.org/2000/svg';
    return (
        <>
        <div className={styles.card}>
                <Link to={"/artista/"+id} style={{textDecoration: 'none'}}>
                    <h1 className={styles.title}>{name}</h1>
                    {src ?
                    <img className = {styles.picture} src={src ? src : facelessImage} alt ='Imagem do Artista'/> :
                    <svg className = {styles.picture} width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg"><title>Artist Icon</title><path d="M53.043 50.486L46.68 46.83c-.636-.366-1.074-.99-1.2-1.716-.125-.725.077-1.462.555-2.02l5.178-6.072c3.287-3.84 5.097-8.743 5.097-13.803V21.24c0-5.85-2.447-11.497-6.716-15.5C45.266 1.686 39.596-.343 33.66.048c-11.12.718-19.83 10.326-19.83 21.87v1.3c0 5.063 1.81 9.964 5.096 13.802l5.18 6.074c.476.558.678 1.295.553 2.02-.127.723-.563 1.35-1.202 1.717l-12.697 7.3C4.124 57.9 0 64.982 0 72.61v5.92h2.97v-5.92c0-6.562 3.548-12.653 9.265-15.902l12.702-7.3c1.407-.81 2.372-2.19 2.65-3.788.276-1.598-.17-3.22-1.222-4.454l-5.18-6.077C18.356 31.787 16.8 27.57 16.8 23.216v-1.3c0-9.982 7.49-18.287 17.05-18.906 5.124-.326 9.99 1.41 13.712 4.9 3.727 3.493 5.778 8.227 5.778 13.332v1.977c0 4.352-1.557 8.57-4.385 11.872l-5.18 6.074c-1.05 1.234-1.496 2.858-1.22 4.456.278 1.597 1.242 2.977 2.647 3.785l4.51 2.59c1.048-.61 2.16-1.12 3.33-1.51zM66.84 37.133v22.71c-2.038-2.203-4.942-3.592-8.17-3.592-6.143 0-11.14 5-11.14 11.14 0 6.143 4.996 11.14 11.14 11.14 6.142 0 11.14-4.997 11.14-11.14V42.28l8.705 5.027L80 44.732l-13.16-7.6zM58.67 75.56c-4.504 0-8.17-3.664-8.17-8.17 0-4.504 3.664-8.168 8.17-8.168 4.504 0 8.168 3.664 8.168 8.17 0 4.504-3.664 8.168-8.17 8.168z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    }
                </Link>
            </div>
        </>
    )
}

ArtistCard.propTypes = {
    name: PropTypes.string,
    src : PropTypes.string,
    id : PropTypes.string,
}


export default ArtistCard