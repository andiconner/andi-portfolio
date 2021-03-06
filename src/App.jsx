import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import React, { useState } from "react";


const App = () => { 
  const[currentPage, setCurrentPage] = useState("home")
  const showPage = () => {
    if (currentPage === 'home'){
      return <Intro setCurrentPage = {setCurrentPage}/>
    }else if(currentPage === 'about'){
      return <About setCurrentPage={setCurrentPage}/>
    }else if(currentPage === 'skills'){
      return <Skills setCurrentPage={setCurrentPage}/>
    }else if (currentPage === 'portfolio'){
      return <Portfolio setCurrentPage={setCurrentPage}/>
    }else if (currentPage === 'contact'){
        return <Contact setCurrentPage={setCurrentPage}/>
    }else {
      return <Intro setCurrentPage ={setCurrentPage}/>
    }
  }
  return (
    <div className='app'>
    <Header setCurrentPage ={setCurrentPage}/> 
    <main>
      {showPage()}
    
    </main>
    <Footer/>
  </div>
  )
};

export default App;