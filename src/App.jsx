import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from "react";


const App = () => { 
  const[currentPage, setCurrentPage] = useState("home")
  const showPage = () => {
    if (currentPage === 'home'){
      return <Intro setCurrentPage = {setCurrentPage}/>
    }else if(currentPage === 'about'){
      return <About/>
    }else if (currentPage === 'portfolio'){
      return <Portfolio/>
    }else {
      return <Intro setCurrentPage ={setCurrentPage}/>
    }
  }
  return (
    <div className='app'>
    <Header setCurrentPage = {setCurrentPage}/> 
    <main>
      {showPage()}
    
    </main>
    <Footer/>
  </div>
  )
};

export default App;