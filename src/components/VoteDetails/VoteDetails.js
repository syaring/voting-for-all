import React, { Component } from 'react';

export default class VoteDetails extends React.Component {
  constructor(props){
    super(props);

    this.state={
      isSelect: false,
      selectedSubject: ""
    }
  }

  onSelectSubject(sbj){
    this.setState({
      selectedSubject: sbj,
      count: true
    });
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
              <li key={index.toString()} className="subject" onClick={this.onSelectSubject.bind(this,item.subject)}>
                {item.subject}
              {/* {item.voteNum} */}
              </li>
            );
        })}
      </div>
    );
  }
}
