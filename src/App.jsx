import Header from "./Components/Header";
import "./App.css";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import Postlist from "./Components/postlist";
import PostListProvider from "./store/Post-List-store";

function App() {
  let [current, setCurrent] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar setCurrent={setCurrent} current={current} />
        <div className="contain">
          <Header />
          {current == "Home" ? <Postlist /> : <CreatePost />}

        </div>
      </div>
      <Footer />
    </PostListProvider>
  )
}
export default App;