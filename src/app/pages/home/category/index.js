import React from 'react'
import cardImg from '../../../../assets/images/card-1.jpg'
import './index.scss';

const Category = () => {
    return (
        <div>
            <div>
{/* <h1 className=''>Featured</h1> */}
<div className='category__right-category'>

<div className='category__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='category__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='category__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
<div className='category__right-category'>

<div className='category__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='category__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='category__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
<div className='category__right-category'>

<div className='category__right-category__content'>
  <a href='' className='category-title'>
    Want fluffy Japanese pancakes ?
  </a>
    <ul className='category__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 150k views</li>
              </ul>
</div>
<div className='category__right-category__img'>
<img src={cardImg} className='category-image' alt='' />
</div>
</div>
</div>
</div>
    )
}

export default React.memo(Category);
