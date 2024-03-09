import React from "react";
import { useState } from "react";
import WritePost from "./WritePost";
import { RxCross2 } from "react-icons/rx";

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

  return (
    <div className="fixed top-0 right-0 h-min-max w-1/4 bg-white rounded p-2 flex flex-col">
      <div className="flex flex-row">
        <RxCross2 className="float-right w-8 h-8 rounded p-2 hover:bg-gray-200 text-black " />
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
      {postMode == "write" && (
        <WritePost
          postContent={postContent}
          handleContentChange={handleContentChange}
          type={generateMode}
        />
      )}
    </div>
  );
}

export default CreatePost;
