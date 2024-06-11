import './App.css';
import {Route, Routes} from "react-router-dom";
import {Welcome} from "./components/Welcome";
import DarkMode from "./components/DarkMode";
import {NavBar} from "./components/NavBar";

const BASE_PATH = "/book_analysis_frontend";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={`${BASE_PATH}/`} element={<Welcome/>}/>
                <Route path={`${BASE_PATH}/darkmode`} element={<DarkMode/>}/>
                <Route path={`${BASE_PATH}/navbar`} element={<NavBar/>}/>
            </Routes>
        </div>
    );
}

export default App;
