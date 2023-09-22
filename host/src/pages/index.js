import React from "react"
import Footer from "footer/footerApp";

const componentStyle = {
  color: 'blue',
  lineHeight: 2,
  padding: '1.5em',
  fontWeight: "bold"
}

// Uncomment this to perform remote SSR/SSG hack

// export async function getServerSideProps() {
//   const footerPage = await import('footer/footerApp');

//   const content = await footerPage.getStaticProps();

//   return { props : { footerContent: content.props }}  
// }

export default function Host(props = {}) {
  const { footerContent } = props;
  
  return (
    <>
      <div style={ componentStyle }>_______________ HOST _______________</div>
      
      <Footer { ...footerContent } />
    </>
  )  
}