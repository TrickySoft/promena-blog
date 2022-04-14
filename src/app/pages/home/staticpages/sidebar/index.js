/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.scss'
import { NavLink } from 'react-router-dom';
import { getPostList } from '../../../../utils/apiCalls';
import moment from 'moment';


const Sidebar = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPostList((response) => {
      setPostList(response);
    })
  }, []);

  return (
    <div className='main1'>
      {postList.map((post, index) => {
        return (
          <div key={index} className='posts'>
            <div className='posts__image'>
              <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                <img src={post.thumbnail} />
              </NavLink>
            </div>
            <div className='posts__maincontent'>
              <NavLink to={`/post/${post.title.match(/[a-z]+|\d+/ig).join('-')}/${post.Blog_id}`}>
                {post.category}
                <h1>{post.title}</h1>

                {/* <ReadMore Blog_id={post.Blog_id} post={post.content} /> */}

                <ul className='posts__ul'>
                  <li><i className='fa fa-clock-o' aria-hidden='true'> {moment(post.date_created).format('MMM Do')}</i></li>
                  <li><i className='fa fa-eye' aria-hidden='true'></i> 75 reads</li>
                  <li><i className='fa fa-clock-o' aria-hidden='true'></i> 3 min read</li>
                </ul>
              </NavLink>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Sidebar;