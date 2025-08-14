import React from 'react';
import './Awards.css';
import Title from '../Title/Title';
import assets from '../../assets/assets';
const Awards = () => {
  return (
    <div className='container'>
      <Title title='Award Winning Production Work' />
      <div className='awards-section'>
        <img src={assets.nomi} alt="Nominated" className='award-img nominated' />
        <div className='certificate-group'>
          <img src={assets.award} alt="Award" className='award-img' />
          <img src={assets.certificte} alt="Certification" className='award-img' />
        </div>
      </div>
    </div>
  );
};

export default Awards;
