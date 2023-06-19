import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

export default function Pronote() {
  const [value, setValue] = useState("");
  const [notes, setnotes] = useState([]);
  return (
    <div className="flex flex-col items-center h-[87.8vh] bg-slate-500 ">
      <ReactQuill
        className="w-[78vw] mt-2  bg-slate-400 h-[79vh]"
        theme="snow"
        value={value}
        onChange={setValue}
      />
      ;
      <div className="absolute top-[3.9vh] right-5" >
        <button className="px-2">
          <p
          className="bg-yellow-300 border border-slate-700 w-12   text-slate-600 my-[10vh]"
          onClick={() => {
            setValue("");
          }}
        >
          Reset
        </p></button>
        <button className=" px-2">
          <p
          className="bg-yellow-300 border border-slate-700 w-12 text-slate-600 my-[10vh]"
          onClick={() => {
            console.log(value);
          }}
        >
          Save
        </p></button>
        
      </div>
    </div>
  );
}
