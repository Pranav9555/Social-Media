import Header from "./Components/Header";
import "./App.css";
import SideBar from "./Components/SideBar";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="contain">
        <SideBar />
        <Posts />
      </div>
      <Footer />
    </>
  )
}
export default App;