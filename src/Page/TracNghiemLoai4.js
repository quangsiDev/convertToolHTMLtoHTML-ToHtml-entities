import React, { Component } from "react";

import imgType4 from "../assets/type4.PNG";
import Editor from "../components/Editor";

export default class TracNghiemLoai4 extends Component {
  render() {
    this.props.handelSetImgExample(imgType4);
    return (
      <div className="w-full h-3/4">
        <Editor />

        <div>Link video hướng dẫn: <a href="https://www.youtube.com/watch?v=ZscoBxRLlGw" target="_blank" >https://www.youtube.com/watch?v=ZscoBxRLlGw</a> </div>
      </div>
    );
  }
}
