import React, { Component } from 'react';
import firebaseService from '../../services/firebase.js'
import { Link, Redirect } from 'react-router-dom';

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

  onSelectSubject (sbj, index) {
    if (!this.state.isSelected) {
      this.setState ({
        isSelected: true,
        selectedSubject: sbj,
        selectedIndex: index
      });
    } else if (sbj === this.state.selectedSubject) {
      this.setState ({
        isSelected: false,
        selectedSubject: ""
      });
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
    return (
      <div className="vote-details">
        제목 : {this.props.voteItem.title} <br/>
        게시자 : {this.props.voteItem.uploader} <br/>
        마감일 : {this.props.voteItem.deadline} <br/>
        진행여부 : {this.props.voteItem.isGoing ? '진행중' : '마감'} <br/>
        -----투표상세----<br/>
        {
          this.props.voteItem.details.map((item, index) => {
            return (
              <li key={index.toString()} className="subject" onClick={this.onSelectSubject.bind(this,item.subject, index)}>
                {item.subject}
              </li>
            );
        })}

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
  }
}
