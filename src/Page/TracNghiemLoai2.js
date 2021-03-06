import React, { Component } from "react";
import imgType2 from "../assets/type2.PNG";
import Editor from "../components/Editor";

export default class TracNghiemLoai2 extends Component {
  render() {
    this.props.handelSetImgExample(imgType2);

    return (
      <div>
        <div className="w-full h-screen flex flex-col">
          <Editor />
          <Editor />
          <div>Link video hướng dẫn: <a href="https://www.youtube.com/watch?v=lpk8W_IBFwM" target="_blank" >https://www.youtube.com/watch?v=lpk8W_IBFwM </a> </div>
        </div>
      </div>
    );
  }
}
