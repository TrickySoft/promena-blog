import React, {useEffect, useState} from 'react'
// import cardImg from '../../../../assets/images/card-1.jpg'
import './index.scss';
import { getPostList } from '../../../utils/apiCalls';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Postlist = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  getPostList((res)=>{
  setPosts(res);
  console.log(res)
  });
      }, []);

    return (
        <div>
        <span className='headings'>Most Popular</span>
<hr style={{width:'10%'}}/>
            <div className='postlist-container'>

{posts.map((post, index)=>{
  return(
    <div key={index} className='postlist-container__postlist__right-postlist'>

<div className='postlist-container__postlist__right-postlist__content'>
  <NavLink to={`/post/${post.Blog_id}`} className='postlist-title'>
  {post.title.substring(0, 20) + '...'}
  </NavLink>
    <ul className='postlist-container__postlist__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> { moment(post.datetime).format(' D MMM')}</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
              </ul>
</div>
<div className='postlist-container__postlist__right-postlist__img'>
<img src={post.thumbnail} className='postlist-image' alt='' />
</div>
</div>
  )
})}
</div>
</div>
    )
}

export default React.memo(Postlist);
