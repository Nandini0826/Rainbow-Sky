import React from 'react'
import './work.css'
import Title from '../Title/Title'

const work = () => {
  return (
      <div className='container' id="work">
      <Title title='OTHER WORKS' />
      <div className='refer'>
        <iframe src="https://www.youtube.com/embed/GHCLiNfACFY?si=uzanZC5BMJZGog5s" title="Ad shoot"></iframe>
        <iframe src="https://www.youtube.com/embed/_Op0kc33EwI?si=7dPDRDP8JTp4zIbg" title="Film Journey"></iframe>
        <iframe src="https://www.youtube.com/embed/ZTcN7D_mYTs?si=RsM6yI4cDPrfvcRi" title="Eternal"></iframe>
        <iframe src="https://www.youtube.com/embed/rlGMOQbrWgw?si=lMcYFOnxdraNhhR1" title="Infinity"></iframe>
      </div>
      
    </div>
  )
}

export default work