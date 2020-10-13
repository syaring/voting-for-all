import React from 'react';
import { Link } from 'react-router-dom';

export default class VoteList extends React.Component {
  render() {
    return (
      <div id="vote-list">
        <div className="content">
          <h1>👉🏻VOTE FOR ALL👈🏻</h1>
        </div>
        <ul>
          {this.props.votes.map((item, index) => {
            return (
              <li key={item.id} className="box">
                <Link to={`votings/${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>| 💁🏻‍{item.uploader}님의 투표 | ⏰{item.deadline} |</p>
                  {item.isGoing? '투표에 참여하세요!' : '마감된 투표입니다! 🔍 결과보기'}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
