import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Sidebar from "../Sidebar/Sidebar";

function WritePost(props) {
  const { postContent, handleContentChange, type } = props;

  return (
    <div className="container flex flex-col">
      <Sidebar />
      <div
        className="py-1.5 pl-1 border-2 rounded border-gray-300 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 h-52 font-mono"
        contentEditable={true}
        onChange={handleContentChange}>
        {postContent[type]}
      </div>
      <div className="flex flex-row">
        <button className="rounded-md m-2 float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Generate ⚡
        </button>
        <button className="rounded-md m-2 float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Post
        </button>
      </div>
    </div>
  );
}

export default WritePost;
