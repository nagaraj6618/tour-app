import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'

const Testimonials = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   swipeToSlide: true,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,

  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings:
  //       {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,

  //       }

  //     }
  //   ]
  // }
  return <Slider>
    <div className='testimonial py-4 px-3'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat quidem, veritatis illo amet velit minus molestiae aut natus aliquam dolores voluptatibus id facilis cum iusto quos dolore! Quo, dicta.
        Porro aliquam ipsum rerum natus quisquam illo! Sit suscipit perspiciatis, iusto, voluptatum eum quisquam consequuntur quia beatae soluta unde mollitia vero vitae, tempore ut nemo totam saepe obcaecati minima minus!</p>
      <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
        <div>
          <h6 className='mb-0 mt-3'>Jhon Jhon</h6>
          <p>Customer</p>
        </div>
      </div>
    </div>
  </Slider>
}

export default Testimonials