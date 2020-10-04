import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import ClosedPage from '../Pages/ClosedPage/ClosedPage';
import OngoingPage from '../Pages/OngoingPage/OngoingPage';

import * as styles from './App.styles';

export default function App() {
  return (
    <div className={styles.Root}>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <OngoingPage />
        </Route>
        <Route path='/closed'>
          <ClosedPage />
        </Route>
      </Switch>
    </div>
  );
}
