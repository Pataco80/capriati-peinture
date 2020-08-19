import React from 'react'
import styled from 'styled-components'
import {setLinearBcg, setFlex} from '../theme/helpers'

import videoMp4 from '../assets/video/paint.mp4'

const Videobcg = ({className, children}) => {
  
  return (
    <div className={className}>
      <span className='overlay'></span>
      {children}
      <video id='video' autoPlay loop playsInline>
        <source src={videoMp4} type="video/mp4" /> 
      </video>
    </div>
  )
}

export default styled(Videobcg)`
${setFlex({flDir:'column'})};
width:100%;
height:100vh;
overflow:hidden;
z-index:1!important;
position:relative;
top:0;
left:0;

.overlay {
  display: block;
  width:100%;
  height:100%;
  ${setLinearBcg({colStart:'rgba(0,0,0,0.7)',colEtart:'rgba(0,0,0,0.2)'})};
}

video {
  position: absolute;
  width:100%;
  left:0;
  top:0;
  height:100%;
  object-fit:cover;
  z-index:-1;
}
`
