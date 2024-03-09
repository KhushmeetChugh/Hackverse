import { StrictMode } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <div className="container flex flex-row bg-gray-500">
      <Sidebar />
      <CreatePost />
    </div>
  );
}

export default App;
