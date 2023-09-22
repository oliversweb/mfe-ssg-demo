import React from "react"
import Footer from "footer/footerApp";

const componentStyle = {
  color: 'blue',
  lineHeight: 10,
  padding: '1.5em',
  fontWeight: "bold"
}

export default function Host(props) {
  const { footerContent } = props;

  return (
    <>
      <div style={ componentStyle }>_______________ HOST _______________</div>
      
      <Footer props={{ footerContent }} />
    </>
  )  
}

export async function getStaticProps() {
  const footerPage = await import('footer/footerApp');

  const content = await footerPage.getStaticProps();

  return { props : { footerContent: content  }}  
}