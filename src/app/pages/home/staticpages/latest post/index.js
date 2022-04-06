import React, { useState, useEffect } from 'react'
import './index.scss'
// import image from '../../../../../assets/images/Artboard2.png'
// import Sidebar from '../sidebar';
import { getPostList } from '../../../../utils/apiCalls';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const Latest = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      setPostList(response);
    })
  }, []);
  return (
    <div>
      <div className='allposts'>
        <div className='latest'>
          <button>Latest posts</button>
          <div className='latest__posts'>
            {
              postList.map(post => {
                var url = post.thumbnail;
                return (
                  <div className='latest__post' key={post.Blog_id}>
                    <div className='latest__post__image'>
                      <img src={url} key={post.thumbnail} className='posts__image' />
                    </div>
                    <div className='latest__post__maincontent'>
                      <NavLink className='posts__link' to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                        {post.category}
                        <h3>{post.title}</h3>
                      </NavLink>

                      <ul className='post__ul'>
                        <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM-Do-YY, hh:mm A')}</i></li>
                        <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                        <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
                      </ul>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='trending'>
          <button>Categories</button>
          <div className='trending__content'>
            {
              postList.map(post => {
                var url = post.thumbnail;
                return (
                  <div className='trending__posts' key={post.Blog_id}>
                    <div className='trending__posts__image'>
                      <img src={url} key={post.thumbnail} className='posts__image' />
                    </div>
                    <div className='trending__posts__maincontent'>
                      <NavLink className='posts__link' to={`/post/${post.Blog_id}`}>
                        {post.category}
                        <h3>{post.title}</h3>
                      </NavLink>
                     

                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest;
