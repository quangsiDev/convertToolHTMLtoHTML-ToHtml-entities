import React from "react";
// import { encode } from "html-entities";
const entities = require("entities");

export default function Output({ output }) {
  return (
    <div className="bg-gray-50 w-1/2 text-gray-800 text-sm h-full   break-words border-solid border-gray-800">
      {/* {encode(output)} */}
      <p className="overflow-y-scroll w-full h-full border-solid border-purple-900 p-3">
        {" "}
        {entities.encodeHTML(output)}
      </p>
    </div>
  );
}
