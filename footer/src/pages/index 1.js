import React from 'react'
const UK_FOOTER_CONTENT_URL = 'https://mfe-component.s3.eu-west-1.amazonaws.com/uk-footer.json';

const componentStyle = {
  color: 'red',
  lineHeight: 1,
  padding: '1.5em',
  fontWeight: "bold"
}

export const getData = async () => {
  let content = null; 
  try {      
    let res = await fetch(UK_FOOTER_CONTENT_URL);        
    content = await res.json();
  } catch (error) {
    throw new Error(`Unable to fetch footer content ${error.message}`, error);
  }

  return content;
};

export async function getStaticProps() {
    const content = await getData();

    return { props : { footerContent: content  }}
}

export default function Footer({ footerContent }) {  
    const data = footerContent;

    if (!data) {
        return (
          <div style={ componentStyle }>_______________ FOOTER FAILED _______________</div>
        )
    }

    return (      
      <div style={ componentStyle }>
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
