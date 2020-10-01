import React from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import VoteList from '../VoteList/VoteList.js';
import VoteDetails from '../Vote/Vote.js'
import VoteForm from '../VoteForm/VoteForm.js'
import FAB from '../FAB/FAB.js'
import _ from 'lodash';

import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voteList: []
    }
  }

  updateSelectedItem(idx){
    this.setState({
      selectedItemIndex: idx
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/"
          render={() => {
            return (
              this.state.voteList.length ?
              (<VoteList
                votes={this.state.voteList}
                onItemSelect={this.updateSelectedItem.bind(this)}
              />) :
              "새로운 투표를 등록해주세요!"
            )
          }}
        />

        <Switch>
        <Route path="/votings/new"
          render={() => {
            return (
              <VoteForm />
            )
          }}
        />

        <Route path={"/votings/:id"}
          render={props => {
            const selectedItem = _.find(this.state.voteList, {
              id: props.match.params.id
            });
            return (
              <VoteDetails
                voteItem={selectedItem}
              />
            );
          }}
        />
        </Switch>

        <Route exact path="/"
          render={() => {
            return (
              <Link to="/votings/new">
                <FAB />
              </Link>
            )}}
        />

      </div>
    );
  }
}
