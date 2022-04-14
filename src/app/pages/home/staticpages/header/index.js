/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import './index.scss';
import logo from '../../../../../assets/images/Yoneak.png'
import { NavLink, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getCategoryDetails, getMenuDetails, getPostList } from '../../../../utils/apiCalls';
import PopUp from 'app/components/popup';
import hembuger from '../../../../../assets/images/hemburger.jpg'
const Header = () => {
  const location = useLocation();
  const history = useHistory();
  let pathName = location.pathname;
  const [menu, setMenu] = useState('');
  const [category, setcategory] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostList((res) => {
      setPosts(res);
    });
  }, []);

  const handleClick = () => {
    setShowConfirm(true);
  }

  return (
    <div>
      {pathName !== '/admin' ? (<div className='header-wrapper'>
        <nav>
          <input type='checkbox' id='show-search'></input>
          <input type='checkbox' id='show-menu'></input>
          <label htmlFor='show-menu' className='menu-icon'><i className='fas fa-bars'></i></label>
          <div className='content'>
            <div className='content-logo'>
              <a onClick={() => history.push('/')}><img src={logo} className='logo' alt='logo' /></a>
            </div>
            <ul className='link'>
              <li><a href='https://yoneak.com/home'> &nbsp;
                HOME</a></li>
              <li><a onClick={() => history.push('/')}> &nbsp;
                PRICING</a></li>
              <li><a onClick={() => history.push('/')}> &nbsp;
                ABOUT US</a></li>
              {/*<li>
                <a onClick={() => history.push('/')} className='desktop-link'>Blog ˅</a>
                <input type='checkbox' id='show-ppc'></input>
                <label htmlFor='show-ppc'>Blog</label>
                <ul>
                  {posts?.length && posts?.map((post, index) => {
                    return (
                      <li key={index}>
                        <NavLink
                          to={`/post/${post?.title?.match(/[a-z]+|\d+/ig).join('-')}/${post?.Blog_id}`}
                        >{post?.slug}</NavLink>
                      </li>
                    )
                  })}
                </ul>
                </li> */}
              <li><a onClick={() => history.push('/')}> &nbsp;
                CONTACT US</a></li>
            </ul>
            {showConfirm && <PopUp onCancel={() => { setShowConfirm(false) }} />}<img src={hembuger} alt='' onClick={handleClick} className='hamburger' />
          </div>
        </nav>
      </div>) : null}
    </div>
  )
}

export default Header;
