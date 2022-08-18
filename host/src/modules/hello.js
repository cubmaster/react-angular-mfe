
import React, { useEffect, useRef } from "react";
import {mount} from "ngmfe/AppComponent";
import { v4 as uuidv4 } from 'uuid'; 

const HelloModule = (props) => {
  // eslint-disable-next-line no-unused-vars
  const ref = useRef(null);

  //runs once with component loads
  useEffect(() => {
    mount();  
  }, []);  

  //create a unique key in the window dom object so I can save props there.
  const alias = uuidv4();
  window[alias] = props;
  //pass the key to the app-root of my mfe so it knows where to find the props
  //the props attribute value is just the key.. not the actual props.  The ng component will need to 
  //go get them with the key.
  return  <app-root props={alias}></app-root>;
  
};

export default HelloModule;