import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./views/base/components/main-header";
import Footer from "./views/base/components/main-footer";
import Login from "./views/base/login/login-container";
import SignUp from "./views/base/components/sign-up";
import Home from "./views/home/Home";
import SideBar from "./views/base/components/main-sidebar";
// import { signIn } from "./auth";

function App() {
  return (
    // <Router>
    //   <Header />
    //   {/* <SideBar /> */}
    //   <Switch>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     <Route path="/signup">
    //       <SignUp />
    //     </Route>
    //   </Switch>
    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    //   <Footer />
    // </Router>
    <Home />
  );
}

export default App;
