import React, { Component } from "react";
import AccountBookForm from "./AccountBookForm";
import AccountBookInfoList from "./AccountBookInfoList";

import './App.css';

class App extends Component {

  //기본 설정값
  currentId = 1;
  state = {
    list: [
      {
        id: 0,
        type: "수입",
        price: 500000,
        usage: "용돈",
        date: "2024. 06. 15"
      },
      {
        id: 1,
        type: "지출",
        price: 150000,
        usage: "미용",
        date: "2024. 06. 18"
      }
    ],
    keyword: ""
  };

  change = event => {
    this.setState({
      keyword: event.target.value
    });
  };

  //지출 및 수입 추가
  add = data => {
    const { list } = this.state;
    this.setState({
      list: list.concat({ id: ++this.currentId, ...data })
    });
  };

  //내용 삭제
  remove = id => {
    const { list } = this.state;
    this.setState({
      list: list.filter(info => info.id !== id)
    });
  };

  //내용 수정
  update = (id, data) => {
    const { list } = this.state;
    this.setState({
      list: list.map(
        info =>
          id === info.id 
            ? { ...info, ...data } 
            : info
      )
    });
  };

  //내용검색
  render() {
    const { list, keyword } = this.state;
    const filteredList = list.filter(
      info => info.usage.indexOf(keyword) !== -1
    );

    return (
      <div className="bg">
        <div className="main">
        <React.Fragment>
          <div className="form">
          <AccountBookForm onAdd={this.add} />
          <p>
          <p/>
            <input
              placeholder="검색어를 입력하세요."
              onChange={this.change}
              value={keyword}
            />
          </p>
          </div>
          <AccountBookInfoList
            list={filteredList}
            onRemove={this.remove}
            onUpdate={this.update}
          />
        </React.Fragment>
        </div>
      </div>
    );
  }
}

export default App;
