import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

const Footer = () => {
  // Footer of site
  return (
    <div>
        <footer >
            <Container>
                <Row>
                    <Col className='text-center py-4'> <a href='https://www.linkedin.com/in/lidor-lazar/'><i className="fa-brands fa-linkedin"> Linkedin</i></a></Col>
                    <Col className='text-center py-4'> Copyright &copy; SoccerShop</Col>
                    <Col className='text-center py-4'><a href='https://github.com/LidorLazar'><i className="fa-brands fa-github"></i> Github</a></Col>
                </Row>
            </Container>
        </footer>
    </div>

  )
}

export default Footer