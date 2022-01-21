import React from 'react';
import banner from '../../../../../assets/images/banner1.png';
import './index.scss';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__content'>
        <h1>Hello, Everyone</h1>
        <h1><span>Welcome</span> to blog site</h1>
        <p>Dont miss out latest news about everything...</p>
      </div>
      <div className='banner__image'>
        <img src={banner} alt='Los Angeles' className='d-block' style={{ width: '100%' }} />
      </div>
    </div>
  )
}

export default Banner;
