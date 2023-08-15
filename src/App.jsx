import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Nav from "./components/Nav";
import ProjectList from "./components/ProjectList";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("About")

  function pageNav() {
    if(page == "About"){
      return(<About/>)
    }
    else if(page == "Portfolio"){
      return(<ProjectList/>)
    }
    else if(page == "Contact"){
      return(<Contact/>)
    }
    else if(page == "Resume"){
      return(<Resume/>)
    }
  }

  return (
    <>
    <Header/>
    <Nav setPage={setPage}/>
      {pageNav()}
      {/*<div>
      
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setPage((page) => page + 1)}>
          page is {page}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
      <Footer/>
    </>
  )
}
export default App;
