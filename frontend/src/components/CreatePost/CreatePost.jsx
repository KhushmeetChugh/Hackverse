import React from "react";
import { useState } from "react";
import WritePost from "./WritePost";
import { RxCross2 } from "react-icons/rx";
import { FaPen } from "react-icons/fa";

function CreatePost() {
  const [generateMode, setGenerateMode] = useState("title");
  const [postMode, setPostMode] = useState("write");

  //post Contents
  const [postContent, setPostContent] = useState({
    title: "",
    script: "",
    thumbnail: "",
  });

  const handleContentChange = (event) => {
    console.log("Content changed");
  };

  //divider -- horizontal divider
  const Divider = () => <hr className="sidebar-hr m-2" />;

  const changeMode = (mode) => {
    setPostMode(mode);
  };

  return (
    <div className="fixed top-0 right-0 h-min-max w-1/4 bg-white rounded p-2 flex flex-col">
      {postMode == "ready" && (
        <div className="fixed right-0 bottom-0 rounded-md  m-2 float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <FaPen onClick={() => changeMode("write")} />
        </div>
      )}

      {postMode == "write" && (
        <>
          <div className="flex flex-row">
            <RxCross2
              className="float-right w-8 h-8 rounded p-2 hover:bg-gray-200 text-black "
              onClick={() => changeMode("ready")}
            />
          </div>
          <Divider />
          <h1 className="text-xl font-semibold">Generate: </h1>
          <div className="flex flex-row text-l gap-6 p-2">
            <div
              className={
                "border-2 p-1 text-center" +
                (generateMode === "title" && " border-blue-200 rounded")
              }
              onClick={() => setGenerateMode("title")}>
              Title
            </div>
            <div
              className={
                "border-2 p-1 text-center" +
                (generateMode === "script" && " border-blue-200 rounded")
              }
              onClick={() => setGenerateMode("script")}>
              Script
            </div>
            <div
              className={
                "border-2 p-1 text-center" +
                (generateMode === "thumbnail" && " border-blue-200 rounded")
              }
              onClick={() => setGenerateMode("thumbnail")}>
              Thumbnail
            </div>
          </div>
          <WritePost
            postContent={postContent}
            handleContentChange={handleContentChange}
            type={generateMode}
          />
        </>
      )}
    </div>
  );
}

export default CreatePost;
