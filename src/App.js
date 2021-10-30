import React from "react";
import Gallery from "./pages/Gallery";
import styles from "./styles/style.scss";
import FooterSection from "./components/FooterSection";
import About from "./pages/About";
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
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <FooterSection />
      </Switch>
      {/* <div
        className="author"
        style={{
          textAlign: "center",
          margin: "0",
        }}
      >
        <p> @Tazlo Zoli 2021 </p>{" "}
      </div>{" "} */}
    </div>
  );
}

export default App;
