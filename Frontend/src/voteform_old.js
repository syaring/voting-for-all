import React from 'react';
import update from 'react-addons-update';

import './VoteForm.css'


export default class VoteForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      endDate: "",
      subjectList: ["", ""]
    }
  }

  onAddItem() {
    this.setState({
      subjectList: [...this.state.subjectList, ""]
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

  onSubjectChange(ev, idx){
    //this.state.subjectList[idx] = ev.target.value;
    //console.log(ev);
    let arr = [...this.state.subjectList];
    // arr[idx] = ev.target.value;
    this.setState({
      subjectList: arr
    })
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
                    <input key={idx} type="text" placeholder="SET ITEM"
                      onClick={this.onSubjectChange.bind(this, idx)}
                    />
                  );
                })
              }
              {console.log(this.state.subjectList)}
            </div>
          </div>
          <div className="row">
            <a href="#" className="add" onClick={this.onAddItem.bind(this)}>+</a>
          </div>
          <div className="row">
            <input type="submit" value="ENROLL"/>
          </div>
      </div>
    );
  }
}
