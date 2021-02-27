import logo from "./logo.svg";
import "./App.css";
import { Routes } from "./Routes/Route";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
