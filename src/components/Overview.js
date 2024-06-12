import React from 'react';
import '../css/Overview.css';
import bookImage from '../assets/img/book.png';
import csvTable from '../assets/img/csv_table.png';
import entitiesTable from '../assets/img/entities_table.png';
import filteredTable from '../assets/img/filtered_table.png';
import { NavBar } from "./NavBar";

export const Overview = () => {
    return (
        <div className="welcome-background">
            <NavBar />
            <main className="main-content">
                <h1 className="title">How does it work?</h1>
                <Step
                    stepNumber="1"
                    stepTitle="Get a .txt book"
                    imageUrl={bookImage}
                />
                <Step
                    stepNumber="2"
                    stepTitle="Get a .csv character table"
                    imageUrl={csvTable}
                />
                <Step
                    stepNumber="3"
                    stepTitle="Apply NLP to get the book entities"
                    imageUrl={entitiesTable}
                />
                <Step
                    stepNumber="4"
                    stepTitle="Use the table to filter character-only entities"
                    imageUrl={filteredTable}
                />
            </main>
        </div>
    );
};

const Step = ({ stepNumber, stepTitle, imageUrl }) => {
    const stepId = `step-image-${stepNumber}`;
    return (
        <div className="step">
            <h2>{stepNumber}. {stepTitle}</h2>
            <img src={imageUrl} alt={stepTitle} id={stepId} className="step-image"/>
        </div>
    );
};
