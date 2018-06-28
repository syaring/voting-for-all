import React from 'react';
import update from 'react-addons-update';
import firebaseService from '../../services/firebase.js'

import './VoteForm.css'

const database = firebaseService.database();

export default class VoteForm extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      uploader: "",
      deadline: "",
      subjectList: ["", ""]
    }
  }
  
  onAddItem() {
    this.setState({
      subjectList: [...this.state.subjectList, ""]
    });
  }

  onSubmit(){
    database.ref('/').set({
      deadline: this.state.deatline,
      details: this.state.subjectList,
      id: '',
      isGoing: '',
      title: this.state.title,
      uploader: this.state.uploader,
      voter: 0
    }, function (err) {
      if (err) {
        console.log("error occured");
      } else {
        console.log("saved successfully");
      }
    })
  }

  render() {
    return (
      <form action="" className="container">
          <div className="row">
            <div className="label">
              <label>TITLE</label>
            </div>
            <div className="input-field">
              <input type="text" name="title" placeholder="SET TITLE..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label>NAME</label>
            </div>
            <div className="input-field">
              <input type="text" name="uploader" placeholder="SET NAME..." />
            </div>
          </div>
          <div className="row">
            <div className="label">
              <label>END DATE</label>
            </div>
            <div>
              <input type="date" name="deadline"/>
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
                    <input key={idx} type="text" name="details" placeholder="SET ITEM" />
                  );
                })
              }
            </div>
          </div>
          <div className="row">
            <p className="add" onClick={this.onAddItem.bind(this)}>+</p>
          </div>
          <div className="row">
            <input type="submit" value="ENROLL"/>
          </div>
      </form>
    );
  }
}
