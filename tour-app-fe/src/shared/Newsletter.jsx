import React from 'react'
import './Newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter_content">
                            <h2>Subscribe now to get useful traveling information</h2>
                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className="btn newsletter_btn">Subscribe</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus sit,
                                explicabo provident hic distinctio molestias voluptates nobis alias
                                placeat susci it earum debitis recusandae voluplate illum expedita
                                corrupti aliquid doloribus delectus?</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter