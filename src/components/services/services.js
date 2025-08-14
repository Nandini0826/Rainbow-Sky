import React from 'react';
import Title from '../Title/Title';
import './services.css';
import assets from '../../assets/assets';

const services = [assets.media, assets.shortfilm, assets.featurefilm, assets.corporatefilm, assets.mediasupport];

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
