/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.scss'
import Chart from '../../charts/barchart';
import Comments from '../blogComments/comments';
import { getPostList } from 'app/utils/apiCalls';
import moment from 'moment';

const BlogPost = (props) => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState('');
  const [comment, setComment] = useState(false);

  useEffect(() => {
    const postId = props.match.params.postId;
    getPostList((res) => {
      const post = res.find(post => post.Blog_id == postId);
      setPost(post);
      setPostId(postId);
    });

  }, [props.match.params.postId]);

  if (post.thumbnail == '') return null;

  const handleComment = () => {
    setComment(!comment)
  }

  return (
    <div className='blog__container'>
      <div className='post-thumb'>

        <span className='blog__post__tag'>{post.title}</span>
        <img src={post.thumbnail} className='post-image' />
      </div>
      <div className='blog__text'>
        <div className='blog__content' dangerouslySetInnerHTML={{ __html: post.content }} style={{ fontSize: '18px'}}>
        </div>
        <div className='comment1'>
          <button className='comment1__button1' onClick={handleComment}>Comment</button>
        </div>
      </div>

      <div className='comment-box'>

        {comment &&
          <div className='comment-wrap comment-items'>
            <Comments
              blogId={props.match.params.postId}
            />
          </div>
        }

      </div>
    </div>
  );
}

export default BlogPost
