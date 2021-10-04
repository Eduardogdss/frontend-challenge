import React from 'react'


const Artist = (props) =>{
    return(
        <>
            <h1>{props.name}</h1>
            <p>{props.popularity}</p>
            <img alt ='' src={props.url}/>
        </>
    )
}

export default Artist