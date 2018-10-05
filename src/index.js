import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';
import { injectGlobal } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { firebase } from './firebase';

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.getElementById('root'));
});

// Global style
// eslint-disable-next-line
injectGlobal`
:root {
    --font-display: 'Playfair Display', serif;
    --font-main: 'Rubik', sans-serif;
    --color-primary: #FEEAE6;
    --color-primary-light: #FEDBD0;
    --color-primary-dark: #442C2E;
    --color-secondary: #E30425;
    --shadow-dark: .11rem .11rem .11rem rgba(0, 0, 0, 0.5);
    --shadow-light: .11rem .11rem .11rem rgba(0, 0, 0, 0.2);
    --line: 2px solid var(--color-primary-dark); 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; 
}

html {
box-sizing: border-box;
font-size: 62.5%; 
}

body {
font-family: var(--font-main);
font-weight: 400;
line-height: 1.7;
color: var(--color-primary-dark);
text-rendering: optimizeLegibility;
user-select: none;
background-color: var(--color-white)
}
`;
