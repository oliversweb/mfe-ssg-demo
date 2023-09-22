import React, { useRef, useEffect } from 'react';
import { mount } from "footer/footerApp";

export default () => {
    const ref = useRef(null);
  
    useEffect(() => {
        const mountFooter = async () => {
            await mount(ref.current);
        };

        mountFooter();
    }, []);
  
    return <div ref={ref} />;  
  }