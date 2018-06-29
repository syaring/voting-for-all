import React, { Component } from 'react';
import firebaseService from '../../services/firebase.js'
import { Link } from 'react-router-dom';

import './Vote.css';

const database = firebaseService.database();

export default class VoteDetails extends React.Component {
  constructor(props){
    super(props);

    this.state={
      isSelected: false,
      selectedSubject: "",
      selectedIndex: 0,
      voteList: []
    }
  }

  onSelectSubject (sbj, index, ev) {
    if (!this.state.isSelected) {
      this.setState ({
        isSelected: true,
        selectedSubject: sbj,
        selectedIndex: index
      });
      ev.target.style.background='purple';
      ev.target.style.color='white';
    } else if (sbj === this.state.selectedSubject) {
      this.setState ({
        isSelected: false,
        selectedSubject: ""
      });
      ev.target.style.background='none';
      ev.target.style.color='black';
    } else {
      window.alert('한가지만 선택할 수 있습니다!');
    }
  }

  onVote () {
    if (this.state.isSelected) {
      let item;
      database.ref(`/${this.props.voteItem.id}`).on('value', (snapshot) => {
        item = snapshot.val();
      });

      let voterUpdate = item.voter + 1;
      let voteUpdate = item.details[this.state.selectedIndex].voteNum + 1;
    
      database.ref(`/${this.props.voteItem.id}`).update({
        voter: voterUpdate
      });

      database.ref(`/${this.props.voteItem.id}/details/${this.state.selectedIndex}`).update({
        voteNum: voteUpdate
      }); 
    } else {
      window.alert('항목을 선택하세요!');
    }
  }

  render() {
    if (this.props.voteItem.isGoing) {
      return (
        <div className="vote-container">
          <div className="row">
            <div className="label">
              <label>TITLE</label>
            </div>
            <div className="value">
            {this.props.voteItem.title}
            </div>
          </div>
          <div>
            <div className="label">
              <label>POSTED by </label>
            </div>
            <div className="value">
            {this.props.voteItem.uploader}
            </div>
          </div>
          <div>
            <div className="label">
              <label>UNTIL </label>
            </div>
            <div className="value">
            {this.props.voteItem.deadline}
            </div>
          </div>

          <div className="list-container">
            <p>✔ 원하는 항목에 투표해주세요!(복수선택 불가, 한번 더 클릭하면 선택이 해지됩니다.)</p>
          {
            this.props.voteItem.details.map((item, index) => {
              return (
                <li key={index.toString()} className="subject isGoing" onClick={this.onSelectSubject.bind(this, item.subject, index)}>
                  {item.subject}
                </li>
              );
          })}
          </div>

          <Link to={this.state.isSelected ? '/' : '#'}>
            <input type="submit" value="VOTE!"
              onClick={this.onVote.bind(this)}
            />
          </Link>

          <Link to='/'>
            <input type="submit" value="go to List" />
          </Link>

        </div>
      );
    } else {
      return (
        <div className="vote-container">
          <div className="row">
            <div className="label">
              <label>TITLE</label>
            </div>
            <div className="value">
            {this.props.voteItem.title}
            </div>
          </div>
          <div>
            <div className="label">
              <label>POSTED by </label>
            </div>
            <div className="value">
            {this.props.voteItem.uploader}
            </div>
          </div>
          <div>
            <div className="label">
              <label>UNTIL </label>
            </div>
            <div className="value">
            {this.props.voteItem.deadline}
            </div>
          </div>
          
          <div className="list-container">
          {
            this.props.voteItem.details.map((item, index) => {
              return (
                <li key={index.toString()} className="subject">
                  {item.subject} | {item.voteNum}/{this.props.voteItem.voter}
                </li>
              );
          })}
          </div>

          <Link to='/'>
            <input type="submit" value="go to List" />
          </Link>

        </div>
      );
    }
  }
}
