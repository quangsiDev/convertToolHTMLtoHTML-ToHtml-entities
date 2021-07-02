import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import InputText from "./components/InputText";
import OptionEditor from "./components/OptionEditor";
import { useState } from "react";

function App() {
  // console.log("\n".repeat("25"));
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
  function handleChangeValueEditor(value) {
    setValueEditor(value);
  }
  return (
    <div className="bg-gray-900 p-10 flex justify-between w-screen min-h-screen ">
      <OptionEditor
        handleChangeTheme={handleChangeTheme}
        handleChangeLanguage={handleChangeLanguage}
        handleChangeFontsize={handleChangeFontsize}
      />
      {/* <InputText handleChangeValueEditor={handleChangeValueEditor} /> */}
      <Editor
        theme={theme}
        language={language}
        fontsize={fontsize}
        valueEditor={valueEditor}
      />
    </div>
  );
}

export default App;
