import "./App.css";
import MainContent from "./layout/MainContent/MainContent";
import Sidebar from "./layout/Siderbar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
