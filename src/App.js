import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App text-white1">
      <Header />
      <div className="grid grid-cols-6	">
        <Sidebar />
        <Contact />
      </div>
    </div>
  );
}

export default App;
