import React, { Component } from "react";
import './AccountBookForm.css'

// 현재시간을 특정 format의 문자열로 반환
const CurrentTime = () => {
  return new Date().toLocaleDateString();
};

class AccountBookForm extends Component {
 
  state = {
    type: "지출",
    price: "",
    usage: "",
    date: ""
  };

  // input 태그의 내용에 변화가 발생했을 때 이벤트 처리
  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      date: CurrentTime()
    });
  };

  // form 태그의 submit 이벤트 처리
  submit = event => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState({
      type: "지출",
      price: "",
      usage: "",
      date: ""
    });
  };

  render() {
    return (
      <div className="Acform">
        <form onSubmit={this.submit}>
          선택하여 주세요 : <select name="type" onChange={this.changeInput}>
            <option defaultValue>지출</option>
            <option>수입</option>
          </select>
          <p/>
          <input
            placeholder="금액"
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.changeInput}
          />
          <p/>
          <input
            placeholder="사용처(ex.미용)"
            name="usage"
            value={this.state.usage}
            onChange={this.changeInput}
          />
          <p/>
          <button type="submit">추가</button>
        </form>
      </div>
    );
  }
}

export default AccountBookForm;
