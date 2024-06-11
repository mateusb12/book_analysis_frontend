import '../css/NavBar.css';
import {Container} from "react-bootstrap";

export const NavBar = () => {
    return (
        <nav>
            <Container>
                <a href="#/" className="dark-mode">DarkMode</a>
                <div className="side-buttons-container">
                    <a href="#/" className="side-button">Home</a>
                    <a href="#/" className="side-button">Examples</a>
                    <a href="#/" className="side-button">Try it out</a>
                </div>
            </Container>
        </nav>
    );
}