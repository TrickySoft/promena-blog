import React from 'react'
import cardImg from '../../../../assets/images/card-1.jpg'
import './index.scss';

const Category = () => {
    return (
        <div>
            <div>
<h1 className='featured-container__featured-title'>Featured</h1>
<div className='allpost__right-category'>

<div className='allpost__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='allpost__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='allpost__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
<div className='allpost__right-category'>

<div className='allpost__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='allpost__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='allpost__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
<div className='allpost__right-category'>

<div className='allpost__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='allpost__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='allpost__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
</div>
        </div>
    )
}

export default Category;
