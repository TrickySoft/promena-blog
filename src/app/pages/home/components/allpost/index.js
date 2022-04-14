
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls';
import moment from 'moment';
import './index.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ReadMore from '../readmore';

const AllPosts = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    getPostList((response) => {
      if (response) setPostList(response);
    });
  }, []);

  return (
    <div className='allpost'>
      {postList.map((post, index) => {
        return (
          <div className='allpost__card-list' key={index}>
            <HelmetProvider>
              <Helmet>
                <meta name='category' content={post.category} />
                <meta name='description' content={post.content} />
              </Helmet>
            </HelmetProvider>
            <div className='allpost__card-list__right-card'>
              <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`} className='cat-title'>
                <div className='allpost__card-list__right-card__img'>
                  <img src={post.thumbnail} className='card-image' alt='' />
                </div>
                <div className='allpost__card-list__right-card__content'>
                  <h5 className='card-title'>
                    <strong className='strong-text'>{post.title}</strong>
                  </h5>
                  <div>
                    <ReadMore Blog_id={post.Blog_id} post={post.content} />
                  </div>
                  <ul className='allpost__card-list__card-ul'>
                    <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.datetime).format(' D MMM')}</i></li>
                    <li>
                      <i className='fa fa-eye' aria-hidden='true'></i> 75 reads
                    </li>
                    <li>
                      <i className='fa fa-clock-o' aria-hidden='true'></i> 3 min
                      read
                    </li>
                  </ul>
                </div>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(AllPosts);
