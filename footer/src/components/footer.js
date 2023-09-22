import React from 'react'

const componentStyle = {
    color: 'red',
    lineHeight: 1,
    padding: '1.5em',
    fontWeight: "bold"
}

export default ({ footerContent }) => {  
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