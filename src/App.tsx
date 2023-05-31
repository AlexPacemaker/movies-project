import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
