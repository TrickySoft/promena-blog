import React from 'react';
import './index.scss';
import Img from '../../../../assets/images/heroslider-image-1.jpg'
import Img2 from '../../../../assets/images/heroslider-image-2.jpg'
import Img3 from '../../../../assets/images/heroslider-image-3.jpg'
// import cardImg from '../../../../assets/images/card-1.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slides = () => {
  
    return (
     <div className='featured-container'>
<h1 className='featured-container__featured-title'>Featured</h1>
<div className='featured'>
<div className='featured__left-slider'>
 <div className='contain'>
  <div id='myCarousel' className='carousel slide' data-ride='carousel' data-interval='false'>
    {/* <ol className='carousel-indicators'>
      <li data-target='#myCarousel'  className='active'></li>
      <li data-target='#myCarousel' ></li>
      <li data-target='#myCarousel' ></li>
    </ol> */}

    <div className='carousel-inner'>

      <div className='item active'>
        <img src={Img} alt='Los Angeles' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <p> Want fluffy Japanese pancakes but can’t fly to Tokyo?</p>
        </div>
      </div>

      <div className='item'>
        <img src={Img2} alt='Chicago' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
          <p> Want fluffy Japanese pancakes but can’t fly to Tokyo?</p>
        </div>
      </div>
    
      <div className='item'>
        <img src={Img3} alt='New York' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p> Want fluffy Japanese pancakes but can’t fly to Tokyo?</p>
        </div>
      </div>
  
    </div>

    <a className='left carousel-control' href='#myCarousel' data-slide='prev'>
      <span className='glyphicon glyphicon-chevron-left'></span>
      <span className='sr-only'></span>
    </a>
    <a className='right carousel-control' href='#myCarousel' data-slide='next'>
      <span className='glyphicon glyphicon-chevron-right'></span>
      <span className='sr-only'></span>
    </a>
  </div>
</div>

</div>
<div className='featured__right-card'>
<div className='featured__right-card__img'>
<img src={Img} className='card-image' alt='' />
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
