import React from 'react'
import "./About.css";
import Title from '../Title/Title'

const About = () => {
  return (
    <div className='container' id="about">
      <Title title='About Us' />
      <div className='about'>
        <p>
          <strong>Rainbow Sky Productions</strong> is your creative partner in crafting stunning video content that moves hearts and sparks imagination. Inspired by the vivid energy of a rainbow sky, our team blends artistry, passion, and technical mastery to transform brands and ideas into unforgettable visual stories.
        </p>
        <h3>Who We Are</h3>
        <p>
          We’re a team of visionary filmmakers, storytellers, and strategists fueled by color, emotion, and innovation. From dynamic commercials to heartfelt documentaries and viral social videos, we create cinematic experiences that connect, captivate, and endure.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is simple: <em>Create emotionally rich, visually spectacular work that inspires action, elevates brands, and celebrates life’s milestones.</em> We believe every story deserves to be seen — and remembered.
        </p>
        <h3>Our Approach</h3>
        <p>
          From concept to final cut, we collaborate closely with our clients, combining strategic insight with creative flair. Our cutting-edge production process and deep understanding of audience trends ensure every project not only looks breathtaking but delivers measurable impact.
        </p>
        
        
      </div>
    </div>
  )
}

export default About
