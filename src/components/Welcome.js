import React from 'react';
import '../css/Welcome.css';
import { NavBar } from "./NavBar";

export const Welcome = () => {
    return (
        <div className="welcome-background">
            <NavBar />
            <main className="main-content">
                <h1>How does it work?</h1>
                <Step
                    stepNumber="1"
                    stepTitle="Get a .txt book"
                    imageUrl='../assets/img/book.png'
                />
                <Step
                    stepNumber="2"
                    stepTitle="Get a .csv character table"
                    imageUrl="url-to-your-image"
                />
                <Step
                    stepNumber="3"
                    stepTitle="Apply NLP to get the book entities"
                    imageUrl="url-to-your-image"
                />
                <Step
                    stepNumber="4"
                    stepTitle="Use the table to filter character-only entities"
                    imageUrl="url-to-your-image"
                />
            </main>
        </div>
    );
};

const Step = ({ stepNumber, stepTitle, imageUrl }) => {
    return (
        <div className="step">
            <h2>{stepNumber}. {stepTitle}</h2>
            <img src={imageUrl} alt={stepTitle} />
        </div>
    );
};
