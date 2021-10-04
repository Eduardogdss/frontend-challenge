import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <Link to="/Busca">
            <button>
              <h1>Busca</h1>  
            </button>
          </Link>
        </div>

      </React.Fragment>
    )
  }
}

export default Home
