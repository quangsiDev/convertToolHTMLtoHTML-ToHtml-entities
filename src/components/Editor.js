import React, { useState } from "react";
import AceEditor from "react-ace";
import Output from "./Output";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import OptionEditor from "./OptionEditor";
// import "ace-builds";

const Editor = () => {
  const [result, setResult] = useState("");
  const [textCode, setTextCode] = useState("");
  const onChange = (newValue) => {
    // console.log("change", newValue);
    setTextCode(newValue);
  };
  // console.log("valueEditor", valueEditor);
  const [theme, setTheme] = useState("dracula");
  const [language, setLanguage] = useState("javascript");
  const [fontsize, setFontsize] = useState(14);
  const [valueEditor, setValueEditor] = useState("");
  function handleChangeTheme(value) {
    setTheme(value);
  }
  function handleChangeLanguage(value) {
    setLanguage(value);
  }
  function handleChangeFontsize(value) {
    setFontsize(value);
  }
  const executeCodeHandle = () => {
    let result = eval(textCode);
    console.log("result", result);
    setResult(result);
  };
  return (
    <div className="w-full h-full flex flex-col items-start mb-3">
      <div className="flex justify-between items-center  mb-3">
        {/* <button
          className="text-white text-base font-bold bg-purple-500 px-3 py-1 rounded-lg mb-3 mr-3"
          onClick={executeCodeHandle}
        >
          Run
        </button> */}
        <OptionEditor
          handleChangeTheme={handleChangeTheme}
          handleChangeLanguage={handleChangeLanguage}
          handleChangeFontsize={handleChangeFontsize}
        />
      </div>
      <div className="w-full h-full flex">
        <AceEditor
          className="w-1/2 h-full "
          // height="800px"
          fontSize={fontsize * 1}
          mode={language}
          theme={theme}
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2,
          }}
        />
        <div className="w-2 h-2"></div>
        <Output output={textCode}></Output>
      </div>
    </div>
  );
};

export default Editor;
