/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types';
import './index.scss';
import Button from '../../components/button/index';
import Confirm from '../../components/confirmModal/confirm';
import Category from 'app/pages/home/category';
import Loader from '../loader';

const PopUp = ({ id, onCancel, onConfirm, commonTitle }) => {
  const [ spinner, setSpinner ] = useState(true);


  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, []);

  const handleClick = (e) => {
    if (e?.target.id === 'dialog-target') {
      onCancel();
    } else if (e?.target.id === 'dialog-target-table') {
      handleCancelAddPopup();
    }
    return;
  }



  return (
    <div className='overlay' id='dialog-target' onClick={handleClick}>
      <div className='overlay__dialog'>
        <div className='overlay__dialog__title'>
          <p className='overlay__dialog__title__description'>{commonTitle}</p>
          <div className='overlay__dialog__title__cancelBackground__cancel-box' onClick={onCancel}>
            <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__right-arrow'></span>
            <span className='overlay__dialog__title__cancelBackground__cross overlay__dialog__title__cancelBackground__left-arrow'></span>
          </div>
        </div>
       {spinner ? <Loader/>:<Category/>}
        </div>
        </div>

  )
}

PopUp.propTypes = {
  id: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  commonTitle: PropTypes.string,
 
}

PopUp.defaultProps = {
  id: '',
  onCancel: () => { },
  onConfirm: () => { },
  commonTitle: '',
 
}

export default React.memo(PopUp);