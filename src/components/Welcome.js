import '../css/Welcome.css';
import {NavBar} from "./NavBar";
import {RawNavBar} from "./RawNavBar";

export const Welcome = () => {
    return (
        <div className="welcome-background">
            <RawNavBar />
            <h1>Welcome to the Book Analysis Frontend!</h1>
        </div>
    )
}