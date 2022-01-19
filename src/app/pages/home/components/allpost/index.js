/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls'
import moment from 'moment';
import './index.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReadMore from '../readmore';
import cardImg from '../../../../../assets/images/card-1.jpg'
import Category from '../../category';

const AllPosts = () => {

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      if(response)
      setPostList(response);
    });
  }, []);


  return (
    <div className='allpost'>
      {
        postList.map((post, index) => {
          var url = post.thumbnail;
          return (
         
            <div key={index}>
            <HelmetProvider >
            <Helmet>
                        <meta  name='category' content={post.category}/>
                        <meta name='description' content = {post.content}/>
                    </Helmet>
                    </HelmetProvider>
 <div className='slider-contain' key={index}>
<div className='allpost__right-card'>
<div className='allpost__right-card__img'>
<img src={cardImg} className='card-image' alt='' />
</div>
<div className='allpost__right-card__content'>
<h5 className='card-title'><strong className='strong-text'>World ◦</strong> &nbsp;Travel ◦</h5>
  <a href='' className='title'>
    Want fluffy Japanese pancakes but can’t fly to Tokyo?
  </a>
    <ul className='allpost__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> Today</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
              </ul>
</div>
</div>
</div>

{/* <div className='allpost-container' key={index}> */}
{/* <div className='allpost__right-card'>
<div className='allpost__right-card__img'>
<img src={url} className='card-image' alt='' />
</div>
<div className='allpost__right-card__content'>
<h5 className='card-title'><strong className='strong-text'>{post.category} ◦</strong></h5>
  <a href='' className='title'>
  Want fluffy Japanese pancakes but can’t fly to Tokyo?
  </a>
  <div><ReadMore post = {post.content}/></div>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore voluptatem suscipit est id, modi eos odio quis cupiditate sed eligendi.</p>
    <ul className='allpost__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> { moment(post.datetime).format('ddd-mm-yy')}</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
              </ul>
</div>
</div>

</div> */}
</div>
          )
  
        })
      }
      <div className='category-component'>
    <Category/>

    </div>

    </div>
  
  )

}

export default React.memo(AllPosts);