import '../css/NavBar.css';
import { Container } from "react-bootstrap";
import DarkMode from "./DarkMode";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const urlSuffix = "book_analysis_frontend"; // Removed leading slash
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
        <nav className={scrolled ? "scrolled" : ""}>
            <Container>
                <a href={`/${urlSuffix}`} className="dark-mode">
                    <DarkMode/>
                </a>
                <div className="side-buttons-container">
                    <a href={`/${urlSuffix}/overview`} className="side-button">Overview</a>
                    <a href={`/${urlSuffix}`} className="side-button">Examples</a>
                    <a href={`/${urlSuffix}`} className="side-button">Try it out</a>
                </div>
            </Container>
        </nav>
    );
};