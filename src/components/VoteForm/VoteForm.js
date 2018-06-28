import React from 'react';
import firebaseService from '../../services/firebase.js'

import './VoteForm.css'

const database = firebaseService.database();

export default class VoteForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      endDate: "",
      subjectList: [""]
    }
  }

  onAddSubject() {
    this.setState({
      subjectList: [...this.state.subjectList, ""]
    });
  }

  onSubmit() {
    var originKey = database.ref().push().key;
    database.ref(`/${originKey}`).set({
      deadline: this.state.endDate,
      title: this.state.title,
      details: this.state.subjectList.map((data,idx) => {
        return ({
          subject: data,
          voteNum: 0
        });
      }),
      id: originKey,
      isGoing: true,
      uploader: this.state.name,
      voter: 0
    });
  }

  onTitleChange(ev){
    this.setState({
      title: ev.target.value
    });
  }

  onNameChange(ev){
    this.setState({
      name: ev.target.value
    });
  }

  onDateChange(ev){
    this.setState({
      endDate: ev.target.value
    });
  }

  onSubjectChange(idx, ev){
    let arr = [...this.state.subjectList];
    arr[idx] = ev.target.value;
    this.setState({
      subjectList: arr
    });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="label">
              <label>TITLE</label>
            </div>
            <div className="input-field">
              <input type="text" placeholder="SET TITLE..."
                value={this.state.title}
                onChange={this.onTitleChange.bind(this)}
              />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label>NAME</label>
            </div>
            <div className="input-field">
              <input type="text" placeholder="SET NAME..."
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label>END DATE</label>
            </div>
            <div>
              <input type="date"
                value={this.state.endDate}
                onChange={this.onDateChange.bind(this)}
              />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label>ITEM</label>
            </div>
            <div className="item-container">
              {
                this.state.subjectList.map((data, idx) => {
                  return (
                    <input key={idx.toString()} type="text" placeholder="SET ITEM"
                      onChange={this.onSubjectChange.bind(this, idx)}
                    />
                  );
                })
              }
            </div>
          </div>
          <div className="row">
            <p className="add" onClick={this.onAddSubject.bind(this)}>+</p>
          </div>
          <div className="row">
            <input type="submit" value="ENROLL"
              onClick={this.onSubmit.bind(this)}
            />
          </div>
      </div>
    );
  }
}
