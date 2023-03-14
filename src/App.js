import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="App text-white">
      <Header />
      <div className="grid grid-cols-6	">
        <Sidebar />
        <div className="col-span-4 w-3/4 mx-auto pt-16">Content</div>
      </div>
      <h1 className="">hello world </h1>
    </div>
  );
}

export default App;
