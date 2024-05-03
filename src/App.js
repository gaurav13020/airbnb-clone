import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage/SearchPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { Container } from 'react-bootstrap'
import { AuthProvider } from './components/contexts/AuthContext'
import SubmitProperty from './components/Submitproperty/SubmitProperty';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div className="App">

      <Router>
       
        <Header />

        <AuthProvider>
        <Switch>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/login">
            <Container style={{minHeight: "100vh"}}>
              <Login />
            </Container>
          </Route>

          <Route path="/forgot-password">
            <Container style={{minHeight: "100vh"}}>
              <ForgotPassword />
            </Container>
          </Route>

          
          <Route path="/signup">
            <Container className="signup" style={{minHeight: "100vh"}}>
              <div className="w-100" // style={{ maxWidth: "400px"}} 
              >
                <SignUp />
              </div>
            </Container>
          </Route>

          <PrivateRoute exact path="/submit-property" component={SubmitProperty} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          

          

          

        </Switch>
        </AuthProvider>

        <Footer />
      
      </Router>
    </div>
  );
}

export default App;
