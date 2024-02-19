import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./tour-card.css"
import calculateAvgRating from '../utils/avgRating';
import { BASE_URL } from '../utils/config';


const TourCard = ({ tour }) => {

    const { _id, title, city, photo, price, featured, reviews } = tour
    const { totalRating, avgRating } = calculateAvgRating(reviews)
    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={`${BASE_URL}/tours${photo}`} alt="tour-img" />
                    {featured && <span>Featured</span>}
                </div>
            </Card>

            <Card>
                <CardBody>
                    <div className="card__top d-felx align-item-center justify-content-betwen">
                        <span className='tour__location d-flex align=items-center gap-1'>
                            <i className="ri-map-pin-line" ></i> <a href= {`https://google.com/maps/place/${title}`} target='_blank'rel="noreferrer" className='link-tag'>{city}</a>
                        </span>
                        <span className='tour__rating d-flex align=items-center gap-1'>
                            <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? ('Not rated') : (<span>({reviews.length})</span>)}

                        </span>
                    </div>
                    <h5 className='tour_title'><Link to={`/tours/${_id}`} className='link-tag'>{title}</Link></h5>
                    <div className="card__bottom d-felx align-item-center justify-content-between mt-3">
                        <h5>₹{price}<span>/per person</span></h5>
                        <button className='btn booking_btn'>
                            <Link to={`/tours/${_id}`} className='link-tag btn-tag'>Book Now</Link>

                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

export default TourCard