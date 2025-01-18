import Header from "./Components/Header";
import "./App.css";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import Postlist from "./Components/postlist";

function App() {
  let [current, setCurrent] = useState("Home");
  return (
    <>
      <Header />
      <div className="contain">
        <SideBar setCurrent={setCurrent} current={current} />
        {current == "Home" ? <Postlist /> : <CreatePost />}

      </div>
      <Footer />
    </>
  )
}
export default App;