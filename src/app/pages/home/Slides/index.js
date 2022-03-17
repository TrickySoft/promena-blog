/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import Img4 from '../../../../assets/images/news-4.jpg'
import Img8 from '../../../../assets/images/news-8.jpg'
import Img3 from '../../../../assets/images/news-3.jpg'
import Img2 from '../../../../assets/images/news-2.jpg'
import './index.scss';
import { getPostList } from '../../../utils/apiCalls';


const Slides = () => {
    const [posts, setPosts] = useState([]);


  useEffect(() => {
  getPostList((res)=>{
  setPosts(res);
  console.log(res)
  });
      }, []);

    return (
     <div className='featured-container'>
<h1 className='featured-container__featured-title'>Featured</h1>
<div className='featured'>
<div className='featured__left-slider'>
 <div className='contain'>
  <div id='myCarousel' className='carousel slide' data-ride='carousel' data-pause =  'false' data-interval='false'>
    {/* <ol className='carousel-indicators'>
      <li data-target='#myCarousel'  className='active'></li>
      <li data-target='#myCarousel' ></li>
      <li data-target='#myCarousel' ></li>
    </ol> */}

    <div className='carousel-inner'>

      <div className='item active'>
        <img src={Img4} alt='Los Angeles' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Want fluffy Japanese pancakes but can’t fly to Tokyo?</h3>
          <ul className='featured__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> 3 min read</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
              </ul>
        </div>
      </div>

      <div className='item'>
        <img src={Img3} alt='Chicago' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Want fluffy Japanese pancakes but can’t fly to Tokyo?</h3>
          <ul className='featured__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> 3 min read</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
              </ul>
        </div>
      </div>
    
      <div className='item'>
        <img src={Img8} alt='New York' className='slider-img' />
        <div className='carousel-caption featured__caption'>
          <h3>Want fluffy Japanese pancakes but can’t fly to Tokyo?</h3>
          <ul className='featured__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> 3 min read</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
              </ul>
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
<img src={Img2} className='card-image' alt='' />
</div>
<div className='featured__right-card__content'>
<h5 className='card-title'><strong className='strong-text'>World ◦</strong> &nbsp;Travel ◦</h5>
    <a href='' className='title'>
    Want fluffy Japanese pancakes but can’t fly to Tokyo?
    </a>
    <ul className='featured__card-ul'>
                <li><i className='fa fa-clock-o featured__card-ul__fa' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye featured__card-ul__fa' aria-hidden='true'></i> 75 reads</li>
                <li><i className='fa fa-clock-o featured__card-ul__fa' aria-hidden='true'></i> 3 min read</li>
              </ul>
</div>
</div>
</div>
</div>
    )
}

export default Slides
