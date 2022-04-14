import React, {useState} from 'react';
import './index.scss'
import DOMPurify from 'dompurify'

const ReadMore = ({post}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
   <div>
        <div className='read-more'>
      {isReadMore ?  <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.length ? post.slice(0, 300):post)}} className='read-more'></p>: <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post)}} className='read-more'></p> }
      {post.length > 150 &&
        <span onClick={toggleReadMore} className='read-more1'>
          {isReadMore ? <p>...Read More</p> : null}
        </span>
      }
    </div>
   </div>
  )
}


export default ReadMore;