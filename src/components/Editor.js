import React, { useState } from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import Output from "./Output";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-html";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
// import "ace-builds";

const Editor = ({ theme, language, fontsize, valueEditor }) => {
  const [result, setResult] = useState("");
  const [textCode, setTextCode] = useState("");
  const onChange = (newValue) => {
    // console.log("change", newValue);
    setTextCode(newValue);
  };
  // console.log("valueEditor", valueEditor);

  const executeCodeHandle = () => {
    let result = eval(textCode);
    console.log("result", result);
    setResult(result);
  };
  return (
    <div className="w-full min-h-full flex flex-col items-start px-5">
      <button
        className="text-white text-base font-bold bg-purple-500 px-3 py-1 rounded-lg mb-3"
        onClick={executeCodeHandle}
      >
        Run
      </button>
      <AceEditor
        className="w-full h-full "
        height="800px"
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
        // defaultValue={"let number=5\nconsole.log(number)"}
        // defaultValue={"let number=5\nconsole.log(number)"}
        // setOptions={{
        //   enableBasicAutocompletion: true,
        //   enableLiveAutocompletion: true,
        //   enableSnippets: false,
        //   showLineNumbers: true,

        // }}
        // value={valueEditor}
      />
      {/* <Output output={result}></Output> */}
      <Output output={textCode}></Output>
    </div>
  );
};

export default Editor;
