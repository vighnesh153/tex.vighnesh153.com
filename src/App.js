import React from "react";

import Divider from "@material-ui/core/Divider";

import Nav from './Nav';
import Buttons from "./Buttons";
import EditorAndPreview from "./EditorAndPreview";

function App() {
  return (
    <div style={{height: '100%'}}>
      <Nav />
      <div style={{position: 'relative', height: 'calc(100% - 64px)'}}>   {/* NavBar height = 64 */}
        <div style={{height: '55%'}}>
          <EditorAndPreview />
        </div>
        <Divider />
        <div style={{height: 'calc(45% - 1px)'}}>   {/* 1px is height of Divider */}
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
