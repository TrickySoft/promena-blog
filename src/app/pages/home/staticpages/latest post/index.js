import React, { useState, useEffect } from 'react'
import './index.scss'
// import image from '../../../../../assets/images/Artboard2.png'
import Sidebar from '../sidebar';
import { getPostList } from '../../../../utils/apiCalls';
import { NavLink } from 'react-router-dom';

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
                        <Sidebar />
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
                                  </NavLink>
                                  <h3>{post.title}</h3>
                                  
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
