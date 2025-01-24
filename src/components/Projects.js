import React from 'react';

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Bank Management System</h3>
          <p>
            Designed a bank management system involving the core components and functionalities 
            typically required, such as account management, transactions, and reporting.
          </p>
        </div>
        <div className="project-item">
          <h3>Expense Tracker Application</h3>
          <p>
            An application to track daily expenses and manage budgets, built using data science 
            techniques and machine learning to provide analytics and predictive insights.
          </p>
        </div>
        <div className="project-item">
          <h3>21 Number Game</h3>
          <p>
            21 Number Game is a strategic two-player game where players take turns picking 1, 2, 
            or 3 numbers, aiming to avoid saying "21." The game involves strategy and logic to 
            outsmart the opponent and force them to say "21."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
