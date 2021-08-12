import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";


// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  // <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
