import '../css/NavBar.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#/">
                    Aaaaa
                </Navbar.Brand>
                <Navbar.Collapse id="navbar-side-buttons">
                    <Navbar.Brand href="#/skills">Home</Navbar.Brand>
                    <Navbar.Brand href="#/projects">Examples</Navbar.Brand>
                    <Navbar.Brand href="#/connect">Try it out</Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
