import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div id="home-page">
      <section className="full-container bg-cover	h-screen">
        <nav className="flex justify-around">
          <div className="logo">
            <a>AirBNB</a>
          </div>
          <div className="menu grid grid-flow-col gap-5">
            <a>places to stay</a>
            <a>experiences</a>
            <a>online experiences</a>
          </div>
          <div className="tools">
            <a>Become a host</a>
          </div>
        </nav>
        <div className="search-container">
          <div className="search-bar">
            <div className="filter">
              <p className="filter__heading">Location</p>
              <p className="filter__dsc">where are you going?</p>
            </div>
            <div className="filter">
              <p className="filter__heading">Check in</p>
              <p className="filter__dsc">add dates</p>
            </div>
            <div className="filter">
              <p className="filter__heading">Checkout</p>
              <p className="filter__dsc">add dates</p>
            </div>
            <div className="filter">
              <p className="filter__heading">Guests</p>
              <p className="filter__dsc">add guests</p>
            </div>
            <a className="search-button">
              <image />
            </a>
          </div>
        </div>
        <div className="content"></div>
      </section>
    </div>
  );
}

export default App;
