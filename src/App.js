import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import InputText from "./components/InputText";
import OptionEditor from "./components/OptionEditor";
import { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import HomeTemplate from "./Page/HomeTemplate";
import TracNghiemLoai2 from "./Page/TracNghiemLoai2";
import TracNghiemLoai1 from "./Page/TracNghiemLoai1";
import TracNghiemLoai3 from "./Page/TracNghiemLoai3";
import TracNghiemLoai4 from "./Page/TracNghiemLoai4";
import TracNghiemLoai5 from "./Page/TracNghiemLoại5";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/" exact Component={TracNghiemLoai1} />
        <HomeTemplate path="/data/fill_inblank" Component={TracNghiemLoai1} />
        <HomeTemplate
          path="/data/fill_inblank_html_css"
          Component={TracNghiemLoai2}
        />
        <HomeTemplate
          Component={TracNghiemLoai3}
          path="/data/fill_inblank_input"
        />
        <HomeTemplate
          path="/data/multiple_choice"
          Component={TracNghiemLoai4}
        />
        <HomeTemplate
          path="/data/multiple_choice_2"
          Component={TracNghiemLoai5}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
