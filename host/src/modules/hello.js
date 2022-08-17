
import React, { useEffect, useRef } from "react";
import {mount} from "ngmfe/AppComponent";


const HelloModule = () => {
  // eslint-disable-next-line no-unused-vars
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);   
  return <div><app-root></app-root></div>;
};

export default HelloModule;