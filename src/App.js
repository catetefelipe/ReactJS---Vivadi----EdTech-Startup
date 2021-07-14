import "./App.css";
// COMPONENTES SINGLE PAGE APPLICATION (SPA)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// NAVBAR
import Navbar from "./Components/Navbar/index";
// PÁGINAS
import Home from "./Pages/Home/index";
import SoftSkills from "./Pages/SoftSkills/index";
import QuemSomos from "./Pages/QuemSomos/index";
import ConteudosGratuitos from "./Pages/ConteudosGratuitos/index";
import Login from "./Pages/Login/index";
import FaleConosco from "./Pages/FaleConosco/index";
// RODAPÉ
import Footer from "./Components/Footer/index";



function App() {
    return (
        <Router>
            <Navbar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/soft-skills" component={SoftSkills} exact />
                    <Route path="/quem-somos" component={QuemSomos} exact />
                    <Route path="/conteudos-gratuitos" component={ConteudosGratuitos} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/fale-conosco" component={FaleConosco} exact />
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;
