"use client";

import React from 'react';
import styles from './page.module.css'; 

export default function Page() {

  // פונקציה לניווט
  const handleNavigate = (path: string) => {
    console.log(`Navigating to: ${path}`);
    window.location.href = path; 
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Welcome Home</h1>
        <p className={styles.subtitle}>Select a destination to begin</p>

        <div className={styles.cardGrid}>
          
          {/* Card 1: Museum App */}
          <div 
            className={styles.card} 
            onClick={() => handleNavigate('/art')}
          >
            <div className={styles.cardImageContainer}>
              <img 
                src="/images/museum.png" 
                alt="Museum App" 
                className={styles.cardImage} 
              />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <h3>Museum App</h3>
              <p>Explore the Museum.</p>
            </div>
          </div>

          {/* Card 2: Tic-Tac-Toe */}
          <div 
            className={styles.card} 
            onClick={() => handleNavigate('/tic-tac-toe')}
          >
            <div className={styles.cardImageContainer}>
              <img 
                src="/images/tic-tac-toe.png" 
                alt="Tic Tac Toe" 
                className={styles.cardImage} 
              />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <h3>Tic-Tac-Toe</h3>
              <p>Play Tic-Tac-Toe.</p>
            </div>
          </div>

          {/* Card 3: Design */}
          <div 
            className={styles.card} 
            onClick={() => handleNavigate('/design')}
          >
            <div className={styles.cardImageContainer}>
              <img 
                src="/images/sketch.png" 
                alt="Design Studio" 
                className={styles.cardImage} 
              />
              <div className={styles.cardOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <h3>Design Studio</h3>
              <p>Figma Implementation.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}