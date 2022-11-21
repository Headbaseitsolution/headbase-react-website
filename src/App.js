import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contactus from "./pages/Contactus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/aboutus" component={Aboutus}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contactus" component={Contactus}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
