import React, {useRef} from 'react'
import './contact.css'
import Title from '../Title/Title'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Submitting the form with values:', {
    your_name: form.current.your_name.value,
    your_email: form.current.your_email.value,
    message: form.current.message.value,
  });
    emailjs
      .sendForm('service_v59dlqr', 'template_rbqsjab', form.current, {
        publicKey: 'kbQKwljBh0Ah-3LZ0',
      })
      .then(
        () => {
          alert("Your message has been sent successfully!");
        form.current.reset()
        },
        (error) => {
          alert("Failed to send message, please try again.");
        },
      );
  };
  return (

    <div className='contact' id='contact'>
      <Title title='Get in Touch'/>
      <div className='contact-col'>
        <div className='details'>
        <p>Feel free to reach out through contact form or find our contact information below.</p>

        </div>
        
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input className='name' type='text' id="your_name"  placeholder='Your name' name="your_name" />
          <input className='email' id="your_email" type='email' placeholder='Your email' name="your_email" />
          <textarea name="message" rows="10" placeholder='Your message' className='msg'></textarea>
          <button type="submit" value='send' className="submitbtn" >Submit</button>
          
        </form>
        
          
        <div className='socials'>
  <a href="https://www.instagram.com/rainbow.sky_11?igsh=cG15NWh1bmZhenVm" target="_blank" rel="noreferrer">
    <img src={instagram} alt="Instagram" />
  </a>
  <a href="https://www.facebook.com/profile.php?id=61559163914632&rdid=nPFu9OtLdHlkeSgK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16vzfYF9qw%2F#" target="_blank" rel="noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
  <a href="https://wa.me/918013498073" target="_blank" rel="noreferrer">
    <img src={whatsapp} alt="WhatsApp" />
  </a>
  <a href="https://www.youtube.com/@rainbowsky601" target="_blank" rel="noreferrer">
    <img src={youtube} alt="YouTube" />
  </a>
  <a href="mailto:therainbowsky20@gmail.com" target="_blank" rel="noreferrer">
    <img src={gmail} alt="Gmail" />
  </a>
</div>

        
      </div>
    </div>
  )
}

export default Contact