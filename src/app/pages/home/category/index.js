import React, { useEffect, useState } from 'react'
import './index.scss';
import { getPostList } from '../../../utils/apiCalls';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostList((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div>
      <h3 className='headings'>Most Popular</h3>
      <hr />
      <div className='category-container'>

        {posts.map((post, index) => {
          return (
            <div className='category__right-category' key={index}>
              <div className='category__right-category__content'>
                <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                  {post.title.substring(0, 20) + '...'}
                  <ul className='category__right-category__content__card-ul'>
                    <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.datetime).format('D MMM')}</i></li>
                    <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
                  </ul>
                </NavLink>
              </div>
              <div className='category__right-category__img'>
                <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                  <img src={post.thumbnail} className='category-image' alt='' />
                </NavLink>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(Category);
