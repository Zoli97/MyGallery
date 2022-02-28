import React from "react";
import Gallery from "./pages/Gallery";
import styles from "./styles/style.scss";
import FooterSection from "./components/FooterSection";
import About from "./pages/About";
import Gallery2 from "./pages/Gallery2";
import Contact from "./pages/Contact";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Gallery />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/gallery2" exact>
          <Gallery2 />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>
        <FooterSection />
      </Switch>
    </div>
  );
}

export default App;
