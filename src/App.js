import './App.css';
import {Route, Routes} from "react-router-dom";
import {Overview} from "./components/Overview";
import DarkMode from "./components/DarkMode";
import {NavBar} from "./components/NavBar";
import {ResponsiveNavBar} from "./components/ResponsiveNavbar";

const BASE_PATH = "/book_analysis_frontend";

function App() {
    return (
        <div className="App app-background">
            <Routes>
                <Route path={`${BASE_PATH}/overview`} element={<Overview/>}/>
                <Route path={`${BASE_PATH}/darkmode`} element={<DarkMode/>}/>
                <Route path={`${BASE_PATH}/navbar`} element={<NavBar/>}/>
                <Route path={`${BASE_PATH}/responsivenavbar`} element={<ResponsiveNavBar/>}/>
            </Routes>
        </div>
    );
}

export default App;
