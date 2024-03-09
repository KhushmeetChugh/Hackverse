import React from "react";

function PrimaryButton(props) {
  const { text } = props;
  return (
    <button className="rounded-md m-2 float-right bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {text}
    </button>
  );
}

export default PrimaryButton;