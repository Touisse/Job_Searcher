import React from "react";
import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Search/>
      <Jobs/>
      <Value/>
      <Footer/>
    </div>
  );
};

export default App;
