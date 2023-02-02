import "./App.css";
import arrow from "./assets/images/arrow.png";
import bell from "./assets/images/bell.png";
import logo from "./assets/images/netflix.png";
import logo100 from "./assets/images/logo100.png";
import logoPU from "./assets/images/logoPU.png";
import search from "./assets/images/search.png";
import data from "./data.json";
import Section from "./components/Section";

function App() {
  return (
    <>
      <header className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo netflix" />
          </div>
          <div>
            <nav className="menu">
              <ul>Accueil</ul>
              <ul>Séries</ul>
              <ul>Films</ul>
              <ul className="sm-header">Nouveautés les plus regardées</ul>
              <ul className="sm-header">Ma liste</ul>
              <ul className="sm-header">Explorer par langues</ul>
            </nav>
          </div>
          <div className="search-and-count">
            <img className="pictos" src={search} alt="Picto search" />
            <p className="direct">direct</p>
            <img className="pictos" src={bell} alt="Picto bell" />
            <div className="avatar-arrow">
              <div className="avatar">
                <img src={logoPU} alt="" />
              </div>
              <img className="pictos" src={arrow} alt="Picto arrow" />
            </div>
          </div>
        </div>
        <div className="visuel-bottom-header">
          <img src={logo100} alt="" />
        </div>
      </header>
      <main className="container">
        <div className="carousel">
          {data.map((type, index) => {
            return (
              <Section
                key={index}
                category={type.category}
                images={type.images}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
