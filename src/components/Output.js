import React from "react";
// import { encode } from "html-entities";
const entities = require("entities");

export default function Output({ output }) {
  return (
    <div className="bg-gray-50 w-full text-gray-800 text-lg h-60 mt-3 p-3 break-words">
      {/* {encode(output)} */}
      <p> {entities.encodeHTML(output)}</p>
    </div>
  );
}
