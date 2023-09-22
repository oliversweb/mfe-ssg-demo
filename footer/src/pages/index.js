import React from 'react'
import { createRoot } from 'react-dom/client';
import Footer from '../components/footer'

const UK_FOOTER_CONTENT_URL = 'https://mfe-component.s3.eu-west-1.amazonaws.com/uk-footer.json';

const getData = async () => {
  let content = null; 
  try {      
    let res = await fetch(UK_FOOTER_CONTENT_URL);        
    content = await res.json();
  } catch (error) {
    throw new Error(`Unable to fetch footer content ${error.message}`, error);
  }

  return content;
};

export async function mount(el) {
  const content = await getData(); 
  const root = createRoot(el);
  root.render(<Footer footerContent={ content } />);
}

export default function FooterLocal({ footerContent }) {  
  const data = footerContent;

  if (!data) {
      return (
        <div>_______________ FOOTER FAILED _______________</div>
      )
  }

  return (      
    <div>
    _______________ FOOTER _______________
    {
      <ul>              
          {data.sections.map(x => <li key={x.id}>[{x.name}]</li>)}
      </ul>        
    }
    ______________________________________
  </div>
  )
}

// if (process.env.NODE_ENV === 'development') {
//   const root = createRoot(<React.Fragment />);
//   mount(root);
// }