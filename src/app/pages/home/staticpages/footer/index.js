import React, { useState, useLayoutEffect, useEffect } from 'react';
import './index.scss';
import logo from '../../../../../assets/images/promena.png';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { getCategoryDetails, userSubscribe } from '../../../../utils/apiCalls';
import Button from '../../../../components/button';
import { regex } from 'app/constants/regex';
import Confirm from 'app/components/confirmModal/confirm';
import Loader from 'app/components/loader';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  let pathName = location.pathname;
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [dropdown, setDropdown] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => {
    getCategoryDetails((res) => {
      setCategory(res);
    });
  }, []);

  const handleOnChange = (e, key) => {
    setIsBtnDisabled(true);
    let val = e.target.value;
    if (key === 1) {
      setEmail(val);
    } else {
      setDropdown(val);
    }
    if (ValidateEmail(email) && dropdown) {
      setIsBtnDisabled(false);
    }

  };
  const ValidateEmail = (email) => {
    const emailRegex = regex.emailRegex;
    return emailRegex.test(email);
  }

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter' && ValidateEmail(email)) {
      handleSubscribe();
    }
  }
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

const handleLogo = () =>{
window.scrollTo(0, 0);
setTimeout(() => {
  history.push('/');
}, 500);
}

  const handleSubscribe = () => {
    if (ValidateEmail(email)) {
      const payload = {
        User_email_Address: email,
        category_ID: dropdown,
      };
      userSubscribe((res) => {
        setIsShowLoader(true);
        if(res.success ==='True')
        {
          setIsShowLoader(false);
          setShowConfirmModal(true);
          setAlertText(res.message);
          setDropdown('');
          setEmail('');
          setIsBtnDisabled(true);
        }else{
          setIsShowLoader(false);
          setShowConfirmModal(true);
          setAlertText(res.User_email_Address[0]);
          setDropdown('');
          setEmail('');
          setIsBtnDisabled(true);
        }
      }, payload);
    }
  };

  useLayoutEffect(() => {handleClick() }, []);

  return (
    <div>
      {pathName !== '/admin' ? (
        <div className='footer'>
          <div className='footer__left'>
            <a onClick={() => {handleLogo()}}><img src={logo} alt='my home' className='footer__logo' /></a>
            <div className='footer__icons'>
              <ul>
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
            </div>
          </div>
          <div className='footer__center1'>
          <div className='footer__center1__head'>
          <span className='footer__center1__head__tag'>QUICK LINK</span>
          <div className='footer__center1__head__quick-link'>
          </div>
          <hr  className='footer__center1__link-line'/>
          </div>
            <ul>
              <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Advertize
                </a>
                <div className='footer__center1__desktop-link__dotted-line'>______________</div>
     
              </li>
              {/* <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Shop SEJ
                  <div className='footer__center1__desktop-link__dotted-line'>__________</div>
                </a>
             
              </li> */}
              <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Privacy
                  Policy
                </a>
                <div className='footer__center1__desktop-link__dotted-line'>______________</div>
             
              </li>
              <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Contact
                </a>
                <div className='footer__center1__desktop-link__dotted-line'>______________</div>
             
              </li>
              <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> About
                </a>
                <div className='footer__center1__desktop-link__dotted-line'>______________</div>
             
              </li>
              {/* <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Toolbox
                  <div className='footer__center1__desktop-link__dotted-line'>__________</div>
                </a>
             
              </li> */}
              {/* <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Press
                  Materials
                  <div className='footer__center1__desktop-link__dotted-line'>__________</div>
                </a>
             
              </li>
              <li>
                <a onClick={handleClick} className='footer__center1__desktop-link'>

                  <i className='fas fa-arrow-alt-circle-right'></i> Do Not Sell
                  My Personal Info
                  <div className='footer__center1__desktop-link__dotted-line'>__________</div>
                </a>
             
              </li> */}
            </ul>
          </div>
          <div className='footer__center2'>
          <div className='footer__center2__head'>
          <span className='footer__center2__head__tag'>TAGCLOUD</span>
          <div className='footer__center2__head__quick-link'>
          </div>
          <hr  className='footer__center2__link-line'/>
          </div>
            <ul>
              <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>
                   SEO Guide
                </button>
              </li>
              {/* <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   Search
                  Engines Work
                </button>
              </li> */}
              <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   Local SEO
                </button>
              </li>
              {/* <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   Link
                  Building Guide
                </button>
              </li>
              <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   On-Page SEO
                  Guide
                </button>
              </li> */}
              {/* <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   Technical
                  SEO Guide
                </button>
              </li> */}
              <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   
                  SEO Audit
                </button>
              </li>
              <li>
                <button onClick={handleClick} className='footer__center2__desktop-link'>

                   SEO Tools
                </button>
              </li>
            </ul>
          </div>
         
          <div className='footer__right'>
          <div className='footer__right__head'>
          <span className='footer__right__head__tag'>NEWS LETTER</span>
          <div className='footer__right__head__quick-link'>
          </div>
          <hr  className='footer__right__link-line'/>
          </div>
            <h2 className='footer__right__content'>
              Subscribe to &nbsp;
              <span className='footer__right__subscribe'>PROMENA</span>
            </h2>
            <p className='footer__right__content'>
              Subscribe to our daily newsletter to get the latest industry news.
            </p>
            <select
            required
              className='footer__right__select'
              name='select'
              id=''
              value={dropdown}
              onChange={(e) => {
                handleOnChange(e, 2);
              }}
            >
              <option  value='--Select--'>--Select--</option>
              {category.length &&
                category.map((val, index) => {
                  return (
                    <option className='select-options' key={index} value={val.category_id}>
                      {val.category_name}
                    </option>
                  );
                })}
            </select>
            <input
              required
              type='text'
              value={email}
              onKeyUp={(event) => { handleKeyEnter(event); }}
              className='footer__right__input'
              onChange={(e) => {
                handleOnChange(e, 1);
              }}
              placeholder='Enter Email'
            ></input>
            <Button
              buttonClick={()=>{handleSubscribe()}}
              isBtnDisabled={isBtnDisabled}
              className='footer__right__newsletter'
            >
              Subscribe
            </Button>
          </div>
        </div>
      ) : null}
      {showConfirmModal && (
          <Confirm buttonText={'OK'} isCancelRequired={false} confirmTitle={alertText}
            onConfirm={() => { setShowConfirmModal(false) }} onCancel={() => { setShowConfirmModal(false) }} />
        )}
        {isShowLoader ? <Loader /> : null}
    </div>
  );
};

export default Footer;
