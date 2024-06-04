import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainContent from "./layout/MainContent/MainContent";
import Sidebar from "./layout/Siderbar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
