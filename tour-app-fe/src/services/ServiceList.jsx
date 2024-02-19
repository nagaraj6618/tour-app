import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import wetherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: wetherImg,
        title: "Calculate Weather",
        desc: "Click the picture shows its beauty",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Click the picture shows its beauty",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Click the picture shows its beauty",
    },
]

const ServiceList = () => {
    return <>
        {
            serviceData.map((item, index) => <Col lg='3' sm='12' className='mb-4' key={index}><ServiceCard item={item} /></Col>)
        }
        <a href='https://weather-app-react-steel-sigma.vercel.app/' target='_blank' rel="noreferrer" >Calculate Wether</a>
    </>
}
export default ServiceList