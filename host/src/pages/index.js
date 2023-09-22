import React from 'react';
import FooterApp from '../components/FooterApp'

const componentStyle = {
  color: 'blue',
  lineHeight: 2,
  padding: '1.5em',
  fontWeight: "bold"
}

export default () => {
  return (
    <>
      <div style={ componentStyle }>________________ HOST ________________</div>      
      <FooterApp />
    </>
  )  
}
