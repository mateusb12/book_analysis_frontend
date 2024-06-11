import '../css/Welcome.css';
import {NavBar} from "./NavBar";

export const Welcome = () => {
    return (
        <div className="welcome-background">
            <NavBar />
            <h1>Welcome to the Book Analysis Frontend!</h1>
        </div>
    )
}