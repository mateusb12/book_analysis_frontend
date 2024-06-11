import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Welcome} from "./components/Welcome";
import DarkMode from "./components/DarkMode";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/book_analysis_frontend/" element={<Welcome/>}/>
                <Route path="/book_analysis_frontend/navbar" element={<NavBar/>}/>
                <Route path="/book_analysis_frontend/darkmode" element={<DarkMode/>}/>
            </Routes>
        </div>
    );
}

export default App;
