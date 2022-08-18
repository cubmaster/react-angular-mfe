
import React, { useEffect, useRef } from "react";
import {mount} from "ngmfe/AppComponent";
import { v4 as uuidv4 } from 'uuid'; 

const HelloModule = (props) => {
  // eslint-disable-next-line no-unused-vars
  const ref = useRef(null);
  useEffect(() => {
    mount();  
  }, []);  

  const alias = uuidv4();
  window[alias] = props;

  return  <app-root props={alias}></app-root>;
  
};

export default HelloModule;