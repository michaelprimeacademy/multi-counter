import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Headers.jsx";
import { Description } from "./components/Description.jsx";
import { Counter } from "./components/Counter.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Description />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
    </div>
  );
}

export default App;
