import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="home-page">
      <section className="full-container">
        <nav>
          <div className="logo">
            <a>AirBNB</a>
          </div>
          <div className="menu">
            <a>places to stay</a>
            <a>experiences</a>
            <a>online experiences</a>
          </div>
          <div className="tools">
            <a>Become a host</a>
          </div>
        </nav>
        <div className="search-bar"></div>
        <div className="content"></div>
      </section>
    </div>
  );
}

export default App;
