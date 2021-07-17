import React, { Component } from "react";
import imgType1 from "../assets/type1.PNG";
import Editor from "../components/Editor";

class TracNghiemLoai1 extends Component {
  render() {
    this.props.handelSetImgExample(imgType1);

    return (
      <div className="w-full h-3/4">
        <Editor />

        <div>Link video hướng dẫn: <a href="https://www.youtube.com/watch?v=hvnk4P5imTU" target="_blank" >https://www.youtube.com/watch?v=hvnk4P5imTU </a> </div>
      </div>
    );
  }
}

export default TracNghiemLoai1;
// const [theme, setTheme] = useState("dracula");
// const [language, setLanguage] = useState("javascript");
// const [fontsize, setFontsize] = useState(14);
// const [valueEditor, setValueEditor] = useState("");
// function handleChangeTheme(value) {
//   setTheme(value);
// }
// function handleChangeLanguage(value) {
//   setLanguage(value);
// }
// function handleChangeFontsize(value) {
//   setFontsize(value);
// }
// function handleChangeValueEditor(value) {
//   setValueEditor(value);
// }
// return (
//   <div className="bg-gray-900 p-10 flex justify-between w-screen min-h-screen ">
//     <OptionEditor
//       handleChangeTheme={handleChangeTheme}
//       handleChangeLanguage={handleChangeLanguage}
//       handleChangeFontsize={handleChangeFontsize}
//     />
//     {/* <InputText handleChangeValueEditor={handleChangeValueEditor} /> */}
//     <Editor
//       theme={theme}
//       language={language}
//       fontsize={fontsize}
//       valueEditor={valueEditor}
//     />
//   </div>
// );
