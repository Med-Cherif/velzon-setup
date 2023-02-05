import React from 'react';

//import Scss
import './assets/scss/themes.scss';

//imoprt Route
import Route from './Routes';

// Fake Backend 
import fakeBackend from "./helpers/AuthType/fakeBackend";
import { useSelector } from 'react-redux';

// Activating fake backend
fakeBackend();

function App() {

  // const state = useSelector(state => state);

  // console.log({ state })

  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}

export default App;
