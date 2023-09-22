import React, { useEffect, useState} from 'react';
import Footer from "footer/footerApp";

const componentStyle = {
  color: 'blue',
  lineHeight: 2,
  padding: '1.5em',
  fontWeight: "bold"
}

// Uncomment this to perform remote CSR hack

export default function Host() {  
  const [footerContent, setFooterContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const footerPage = await import('footer/footerApp');
      const content = await footerPage.getData();
      setFooterContent({ footerContent: content });
    }

    getData();
  }, []);

  return (
    <>
      <div style={ componentStyle }>________________ HOST ________________</div>
      <Footer { ...footerContent } />
    </>
  )  
}