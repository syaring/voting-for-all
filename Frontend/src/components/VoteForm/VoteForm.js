import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './VoteForm.css';


export default class VoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      name: '',
      endDate: '',
      subjectList: [''],
      isFilled: false
    }
  }

  onAddSubject() {
    this.setState({
      subjectList: [...this.state.subjectList, ""]
    });
  }

  onDateChange(ev){
    let today = new Date();
    let currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let _selectedDate = _.map(ev.target.value.split('-'), data=>parseInt(data));
    let selectedDate = new Date(_selectedDate[0], _selectedDate[1]-1, _selectedDate[2]);

    let isFuture = (currentDate <= selectedDate) ? true : false ;

    if (!isFuture) {
      window.alert("미래의 날짜를 선택해 주세요!");
      this.setState({
        endDate: ""
      })
    } else {
      this.setState({
        endDate: ev.target.value
      });
    }
  }

  onNameChange(ev){
    this.setState({
      name: ev.target.value
    });
  }

  onCheck() {
    let sbjFilled = true;

    for(let i in this.state.subjectList) {
      if(!this.state.subjectList[i]){
        sbjFilled = false;
        break;
      }
    }

    if (
      (this.state.title) &&
      (this.state.name) &&
      (this.state.endDate) &&
      ((this.state.subjectList.length) >= 2) &&
      (sbjFilled)
    ) {
      this.setState({
        isFilled: true
      });
    }
  }

  onSubmit() {
    if (this.state.subjectList.length < 2) {
      window.alert('항목을 두개 이상 설정해 주세요');
    } else {
      window.alert('모든 항목을 입력해 주세요');
    }
  }

  onSubjectChange(idx, ev){
    let arr = [...this.state.subjectList];
    arr[idx] = ev.target.value;
    this.setState({
      subjectList: arr
    });
  }

  onTitleChange(ev){
    this.setState({
      title: ev.target.value
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
            <input className="add" type="button" value="+" onClick={this.onAddSubject.bind(this)}/>
          </div>
          <div className="row">
            <Link to={this.state.isFilled ? '/' : '#'}>
              <input type="submit" value="ENROLL"
                onMouseOver={this.onCheck.bind(this)}
                onClick={this.onSubmit.bind(this)}
              />
            </Link>

            <Link to='/'>
              <input type="submit" value="go to List" />
            </Link>
          </div>
      </div>
    );
  }
}
