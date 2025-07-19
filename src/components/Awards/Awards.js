import React from 'react';
import './Awards.css';
import Title from '../Title/Title';
import nominated from '../../assets/nominated.jpg';
import award from '../../assets/awards.jpg';
import certification from '../../assets/certificate.jpg';

const Awards = () => {
  return (
    <div className='container'>
      <Title title='Award Winning Production Work' />
      <div className='awards-section'>
        <img src={nominated} alt="Nominated" className='award-img nominated' />
        <div className='certificate-group'>
          <img src={award} alt="Award" className='award-img' />
          <img src={certification} alt="Certification" className='award-img' />
        </div>
      </div>
    </div>
  );
};

export default Awards;
