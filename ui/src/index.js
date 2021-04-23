import React from 'react';

import { render } from 'preact';
import { BrowserRouter } from 'react-router-dom';

// import aardio from "aardio";
// import { remote } from "electron";

import App from './App';

import './styles/core.css';
import Errorable from './components/Errorable';



// if (aardio.studioInvoke) {
//   // var remote = require("electron").remote
//   document.addEventListener("keydown", function(e) {
//     if (e.keyCode === 123) {
//       // F12
//       window = remote.getCurrentWindow().toggleDevTools();
//     }
//   });
// }

render(
  <Errorable>
    <BrowserRouter basename={window.AppConfig && window.AppConfig.root}>
      <App />
    </BrowserRouter>
  </Errorable>,
  document.getElementById('root')
);
