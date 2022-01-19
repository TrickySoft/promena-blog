import React from 'react';
import './index.scss';
import Img from '../../../../assets/images/heroslider-image-1.jpg'
import cardImg from '../../../../assets/images/card-1.jpg'
// import Banner from '../staticpages/banner';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slides = () => {
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    //   };

    return (
        <div className='featured-container'>
<h1 className='featured-container__featured-title'>Featured</h1>

<div className='featured'>
<div className='featured__left-slider'>
{/* <Slider {...settings}>
{[1,2,3,4].map((val, index)=>{
    <div key={index}>{val} <img src={Img} alt='' className='slider-img' />
    </div>
})}

</Slider> */}
 <img src={Img} alt='' className='slider-img' />
</div>
<div className='featured__right-card'>
<div className='featured__right-card__img'>
<img src={cardImg} className='card-image' alt='' />
</div>
<div className='featured__right-card__content'>
<h5 className='card-title'><strong className='strong-text'>World ◦</strong> &nbsp;Travel ◦</h5>
    <a href='' className='title'>
    Want fluffy Japanese pancakes but can’t fly to Tokyo?
    </a>
    <ul className='featured__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
              </ul>
</div>
</div>
</div>
</div>
    )
}

export default Slides
