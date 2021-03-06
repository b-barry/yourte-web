import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router'
import GeocodingSearchBox from '../shared/geocodingSearchBox'
import { config } from '../config'
// import SearchBoxExample from '../shared/googleSearch'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.fbConnect = this.fbConnect.bind(this)
  }

  componentDidMount () {
    this.setState({ showModal: false })
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  fbConnect () {
    // axios
    //   .get('http://localhost:1338/auth/facebook')
    //   .then((result) => {
    //     console.log(result.data)

    this.setState({ showModal: false })
    this.props.router.push('/colocswall')
      // })
  }

  render () {
    const fbUrl = `${config.API}/auth/facebook`
    return (
      <div>
{' '}{' '}{' '}
<GeocodingSearchBox />
    {' '}
        <button onClick={this.open}>{'Je cherche une colocation'}</button>
        <button onClick={this.open}>{'Nous recherchons un colocataire'}</button>

        <br />
        <Link to="/dashboard">{'dashboard'}</Link>

         <Modal show={this.state.showModal} onHide={this.close}>
           <Modal.Header closeButton>
             <Modal.Title>{'Se connecter / Sinscrire sur tipi.be'}</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               <a href={fbUrl}>{'connexion avec facebook'}</a>
           </Modal.Body>
           <Modal.Footer>
            <Button onClick={this.close}>{'Close'}</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }

}

export default HomeContainer
