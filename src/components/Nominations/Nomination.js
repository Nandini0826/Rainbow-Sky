import React from 'react'
import './Nomination.css'
import Title from '../Title/Title';
import assets from "../../assets/assets";


const Nomination = () => {
  return (
      <div className='container'>
      <Title title='Nominations' />
      <div className='awards-section'>
        <img src={assets.palken} alt="nomination" className='award-img nominated' />
      </div>
    </div>
  )
}

export default Nomination