import React, { Component } from "react";
import imgType3 from "../assets/type3.PNG";
import Editor from "../components/Editor";

export default class TracNghiemLoai3 extends Component {
  render() {
    this.props.handelSetImgExample(imgType3);
    return (
      <div className="w-full h-2/3 flex flex-col">
        <Editor />
        {/* <Editor /> */}
      </div>
    );
  }
}
