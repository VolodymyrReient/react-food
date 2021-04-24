import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import NotFound from "./component/NotFound/NotFound";
import Category from "./component/Category/Category";
import Recipe from "./component/Recipe/Recipe";

function App() {
    return (
        <>
            <Router basename="/react-food">
                <Header />
                <main className="container content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contact} />
                        <Route path="/category/:name" component={Category} />
                        <Route path="/meal/:id" component={Recipe} />
                        <Route component={NotFound} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
