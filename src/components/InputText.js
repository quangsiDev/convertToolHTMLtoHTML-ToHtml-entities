import React from "react";

import { Input } from "antd";

const { TextArea } = Input;

const InputText = ({ handleChangeValueEditor }) => {
  const onChange = (e) => {
    // console.log("e", e);
    // console.log("defaultValueee", e.target.value);
    // let value = e.currentTarget.defaultValue;
    handleChangeValueEditor(e.target.value);
  };
  // return <TextArea placeholder="Type the place hoder of the editor" className="w-2/5" onKeyDown={onChange} />;
  return (
    <textarea
      placeholder="Type the place hoder of the editor"
      // className="w-2/5 focus:ring-offset-green-600 border-none"
      className="appearance-none block w-2/5 bg-gray-50 text-gray-700 border border-gray-500 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white 
      min-h-1/4"
      onChange={onChange}
    />
  );
};

export default InputText;
