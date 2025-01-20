import Header from "../Components/Header";
import "./App.css";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import "./App.css";
import PostListProvider from "../store/Post-List-store";
import { Outlet } from "react-router";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar />
        <div className="contain">
          <Header />
          {/* {current == "Home" ? <Postlist /> : <CreatePost />} */}
          <Outlet />
        </div>
      </div>
      <Footer />
    </PostListProvider>
  )
}
export default App;