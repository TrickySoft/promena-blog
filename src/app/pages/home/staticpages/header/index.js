import React, { useState, useEffect } from 'react'
import './index.scss';
import logo from '../../../../../assets/images/promena.png'
import { NavLink , useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getCategoryDetails, getMenuDetails } from '../../../../utils/apiCalls';
import PopUp from 'app/components/popup';
import hembuger from '../../../../../assets/images/hemburger.jpg'
const Header = () => {
  const location = useLocation();
  const history = useHistory();
  let pathName = location.pathname;
  const [menu, setMenu] = useState('');
  const [category, setcategory] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    getMenuDetails((response) => {
      setMenu(response)
    });

    getCategoryDetails((response) => {
      setcategory(response);
    });
  }, []);

const handleClick = ()=>{
  setShowConfirm(true);
}

  return (
    <div>
     {pathName !== '/admin' ?(   <div className='header-wrapper'>
          <nav>
            <input type='checkbox' id='show-search'></input>
            <input type='checkbox' id='show-menu'></input>
            <label htmlFor='show-menu' className='menu-icon'><i className='fas fa-bars'></i></label>
            <div className='content'>
              <a onClick={() => history.push('/')}><img src={logo} className='logo' alt='logo' /></a>
              <ul className='link'>
              <li><a onClick={() => history.push('/')}><i className='fas fa-home'></i> &nbsp;
              Home</a></li>
                {menu.length && menu.map((val, index) => {
                  return (
                    <li key={index}>
                      <a onClick={() => history.push('/')} className='desktop-link'>{val.menuname} ˅</a>
                      <input type='checkbox' id='show-ppc'></input>
                      <label htmlFor='show-ppc'>{val.menuname}</label>
                      <ul>
                        {category.length && category.map((value, index1) => {
                          return (
                            <li key={index1}><NavLink to={'/'}>{
                              (val.menuid === value.menuname ? value.category_name : null)
                            }</NavLink></li>
                          );
                        })}
                      </ul>

                    </li>
                  )
                })}
                <li><a onClick={() => history.push('/')}>WEBINARS</a></li>
                <li>
                  <a onClick={() => history.push('/')} className='desktop-link'>FOLLOW ˅</a>
                  <input type='checkbox' id='show-social-links'></input>
                  <label htmlFor='show-social-links'>Follow Us</label>
                  <ul className='social-links'>
                    <li>
                      <a
                        href='https://www.facebook.com/PromenaLLP/'
                        className='fa fa-facebook fa-3x'
                      ></a>
                    </li>
                    <li>
                      <a
                        href='https://api.whatsapp.com/message/DEEJEJJ7JI4KL1'
                        className='fa fa-whatsapp fa-3x'
                      ></a>
                    </li>
                    <li>
                      <a
                        href='https://in.linkedin.com/company/promena-inc'
                        className='fa fa-linkedin fa-3x'
                      ></a>
                    </li>
                    <li>
                      <a href='#' className='fa fa-envelope-o fa-3x'></a>
                    </li>
                  </ul>
                </li>
              </ul>
              {showConfirm && <PopUp onCancel={()=>{setShowConfirm(false)}}/>}<img src={hembuger} alt='' onClick={handleClick} className='hamburger'/>
            </div>
          </nav>
        </div> ):null}
    </div>
  )
}

export default Header;
