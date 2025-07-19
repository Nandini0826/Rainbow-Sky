import React from 'react';
import Title from '../Title/Title';
import './services.css';

import media from '../../assets/media work.png';
import shortfilm from '../../assets/short films.png';
import corporatefilm from '../../assets/feature films.png';
import mediasupport from '../../assets/media support.png';

const services = [media, shortfilm, corporatefilm, mediasupport];

const Services = () => {
  return (
    <div className='services' id="services">
      <Title title="What We Offer" />

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service} alt={`service-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
