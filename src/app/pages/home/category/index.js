import React, {useEffect, useState} from 'react'
// import cardImg from '../../../../assets/images/card-1.jpg'
import './index.scss';
import { getPostList } from '../../../utils/apiCalls';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  getPostList((res)=>{
  setPosts(res);
  console.log(res)
  });
      }, []);

    return (
            <div className='category-container'>
<h3 className='headings'>Most Popular</h3>
<hr />
{posts.map((post, index)=>{
  return(
    <div key={index} className='category__right-category'>

<div className='category__right-category__content'>
  <NavLink to={`/post/${post.Blog_id}`} className='category-title'>
  {post.title.substring(0, 20) + '...'}
  </NavLink>
<div>
<ul className='category__card-ul'>
                <li><i className='fa fa-clock-o' aria-hidden='true'> { moment(post.datetime).format('D MMM')}</i></li>
                <li><i className='fa fa-eye' aria-hidden='true'></i> 15k views</li>
              </ul>
</div>
</div>
<div className='category__right-category__img'>
<img src={post.thumbnail} className='category-image' alt='' />
</div>
</div>
  )
})}
</div>
    )
}

export default React.memo(Category);
