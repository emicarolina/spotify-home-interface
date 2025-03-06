import "./App.css";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BottomNav from "./components/BottomNav/BottomNav";

function App() {
  return (
    <div>
      <Nav />
      <Sidebar />
      <Main />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
