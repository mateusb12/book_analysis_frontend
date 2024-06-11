import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Welcome} from "./components/Welcome";
import DarkMode from "./components/DarkMode";
import {RawNavBar} from "./components/RawNavBar";

const BASE_PATH = "/book_analysis_frontend";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={`${BASE_PATH}/`} element={<Welcome/>}/>
                <Route path={`${BASE_PATH}/navbar`} element={<NavBar/>}/>
                <Route path={`${BASE_PATH}/darkmode`} element={<DarkMode/>}/>
                <Route path={`${BASE_PATH}/rawnavbar`} element={<RawNavBar/>}/>
            </Routes>
        </div>
    );
}

export default App;
