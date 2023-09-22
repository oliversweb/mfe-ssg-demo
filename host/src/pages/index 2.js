import React from 'react';
import Footer from "footer/footerApp";

const componentStyle = {
  color: 'blue',
  lineHeight: 2,
  padding: '1.5em',
  fontWeight: "bold"
}

// Uncomment this to perform remote SSR/SSG hack

export async function getServerSideProps() {
  const footerPage = await import('footer/footerApp');
  const content = await footerPage.getData(); // This time just re-call the remotes getData() method and pass the result to the host, which will then pass it to the footer component
  
  return { props : { footerContent: content }}  
}

export default function Host(props = {}) {
  return (
    <>
      <div style={ componentStyle }>________________ HOST ________________</div>      
      <Footer { ...props } />
    </>
  )  
}