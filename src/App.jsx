import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from "./components/logo/Logo";
import Brand from "./components/Brand/Brand";
import NewsletterForm from "./components/Form/Form";
import ConfirmationPage from "./components/confirmation/confirmation";
// import LE from "./components/lastElement/LE";
import './App.scss'


function App() {
  return (
    <Router>
    <div className="App">
      <Logo />
        <Brand />   
         <Routes>
          <Route path="/"  element={<NewsletterForm />} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
          </Routes>  
      {/* <LE /> */}
      
    </div>
    </Router>
  );
}

export default App;
