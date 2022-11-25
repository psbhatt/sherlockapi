import './App.css';
import ReactDOM from "react-dom/client";
import SearchBar from './Components/SearchBar'
import Heading from './Components/Heading'
import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
        {/*<Router>*/}
            <Heading/>
            <SearchBar/>
        {/*  <Routes>*/}
        {/*    <Route path="/" exact/>*/}
        {/*  </Routes>*/}
        {/*</Router>*/}
      </>
  );
}

export default App
