import React from 'react';
import ReactDOM from 'react-dom';
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
  --color-white: #fafafa;
  --color-black: #4C4646;
  --shadow-dark: .21rem .21rem .21rem rgba(68, 44, 46, 0.7);
  --shadow-light: .11rem .11rem .11rem rgba(68, 44, 46, 0.3);
  --line: 2px solid var(--color-primary-dark); 
}

html {
  box-sizing: border-box;
  font-size: 62.5%; 
}

body {
  margin: 0;
  padding: 0;
  box-sizing: inherit; 
  font-family: var(--font-main);
  font-weight: 400;
  line-height: 1.7;
  color: var(--color-primary-dark);
  text-rendering: optimizeLegibility;
  user-select: none;
  background-color: var(--color-white);
  transition: all .5s;
}

input {
  background: #fafafa;
  border: 1px solid #e9e9e9;
  font-size: 17px;
  padding: 8px;
  border-radius: 3px;
  font-family: inherit;
  font-weight: 300;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

select {
  font-size: 16px;
  height: 38px;
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  width: 100%;
}

button {
  background: #0d1831;
  color: #ffffff;
  border: 1px solid #0d1831;
  padding: 5px 10px;
  margin: 10px auto;
  font-size: 15px;
  border-radius: 3px;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
