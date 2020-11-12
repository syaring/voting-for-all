import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Navbar from '../components/Navbar/Navbar';
import ClosedPage from '../Pages/ClosedPage/ClosedPage';
// import MyVotePage from '../Pages/MyVotePage/MyVotePage';
import OngoingPage from '../Pages/OngoingPage/OngoingPage';

import * as styles from './App.styles';
import { client } from '../graphql';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className={styles.Root}>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <OngoingPage />
          </Route>
          <Route path='/closed'>
            <ClosedPage />
          </Route>
          <Route path='/my-vote'>
            {/* <MyVotePage /> */}
          </Route>
        </Switch>
      </div>
    </ApolloProvider>
  );
}
