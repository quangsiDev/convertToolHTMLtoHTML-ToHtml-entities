import React, { Component } from "react";
import imgType1 from "../assets/type1.PNG";
import Editor from "../components/Editor";
import { Button, Input } from "antd";

const { TextArea } = Input;

class TracNghiemLoai5 extends Component {
  state = {
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    answers: [],
    dataJson: "",
  };

  handleAnswers = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleConvert = () => {
    let answers = this.state.answers;

    answers.push({
      ma: 1,
      noiDung: this.state.input1,
    });
    answers.push({
      ma: 2,
      noiDung: this.state.input2,
    });
    answers.push({
      ma: 3,
      noiDung: this.state.input3,
    });
    answers.push({
      ma: 4,
      noiDung: this.state.input4,
    });
    // console.log(answers);

    this.setState({ dataJson: JSON.stringify(answers) });
  };
  render() {
    this.props.handelSetImgExample(imgType1);

    return (
      //   <div className="w-full min-h-screen">
      <div className="w-full min-h-screen">
        <div className="w-full h-96">
          <Editor />
        </div>
        <div className="w-full flex items-center my-5">
          <div className="w-1/2 ">
            <p className="font-medium text-lg">Answers</p>
            <TextArea
              name="input1"
              className="my-2"
              value={this.state.input1}
              onChange={this.handleAnswers}
              placeholder="Answer1"
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
            <TextArea
              name="input2"
              className="my-2"
              value={this.state.input2}
              onChange={this.handleAnswers}
              placeholder="Answer2"
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
            <TextArea
              name="input3"
              className="my-2"
              value={this.state.input3}
              onChange={this.handleAnswers}
              placeholder="Answer3"
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
            <TextArea
              className="my-2"
              name="input4"
              value={this.state.input4}
              onChange={this.handleAnswers}
              placeholder="Answer4"
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
          </div>
          <div className="w-3 h-3"></div>
          <Button type="primary" onClick={this.handleConvert}>
            Convert
          </Button>
          <div className="w-3 h-3"></div>
          <div className="w-1/2 h-80   bg-white rounded-xl border border-blue-600 flex">
            <p className="w-full p-3 overflow-y-scroll h-full break-words">
              {this.state.dataJson}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TracNghiemLoai5;
//
