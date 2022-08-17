// host/src/App.js

import React from "react";
import ErrorBoundary from "./ErrorBoundary";

//onst Hello = React.lazy(async () => {
//   return  await import("ngmfe/AppComponent"); 
//
// 
// });
import Hello from './modules/hello';

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <Hello></Hello>
    </RemoteWrapper>

    <br />
    <a href="http://localhost:4200">Link to Remote App</a>
  </div>
);
export default App;