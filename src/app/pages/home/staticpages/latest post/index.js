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
      if (response) setPostList(response);
    });
  }, []);

  return (
    <div>
      <div className='allposts'>
        <div className='latest'>
          <button>Latest posts</button>
          <div className='latest__posts'>
            {postList.map((post, index) => {
              return (
                <div key={index}>
                  <div className='latest__post'>
                    <div className='latest__post__image'>
                      <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                        <img src={post.thumbnail} className='posts__image' alt='' />
                      </NavLink>
                    </div>
                    <div className='latest__post__maincontent'>
                      <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                        {post.category}
                        <h3>{post.title}</h3>

                        <ul className='post__ul'>
                          <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM-Do-YY, hh:mm A')}</i></li>
                          <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                          <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
                        </ul>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })
            }
          </div>
        </div>
        <div className='trending'>
          <button>Categories</button>
          <div className='trending__content'>
            {postList.map((post, index) => {
              return (
                <div className='trending__posts' key={index}>
                  <div className='trending__posts__image'>
                    <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                      <img src={post.thumbnail} className='posts__image' alt='' />
                    </NavLink>
                  </div>
                  <div className='trending__posts__maincontent'>
                    <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
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
    </div >
  )
}

export default Latest;
