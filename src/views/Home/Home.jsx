import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
import { Link } from 'react-router-dom'


class Home extends React.Component {

  client = new SomosClient()

  render() {
    return (
      <>
        <div className={styles.wrapper}>
          <SubHeader
            classname={styles.card}
            breadcrumb={[{ text: 'Home' }]}
            heading="Somos Front-end Challange"   
           />
          <Link to="/Busca" data-testid='botao-busca' >
            <button className={styles.button} >
              <h1>Busca</h1>  
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home
