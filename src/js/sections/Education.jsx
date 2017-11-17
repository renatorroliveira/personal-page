import React from 'react';

export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE80C;</i><br />
      Education
    </h3>

    <div className="row container section">
      <div className="col l6 s12">
        <h5>
          <small className="grey-text text-lighten-3">2014</small><br />
          M.Sc. in Computer Science: <i>Computer Networks area</i>
        </h5>
        <h6 className="blue-text text-lighten-4">
          Universidade Federal de Lavras, Lavras/MG, Brazil
        </h6>
        <p className="flow-text">
          Worked with Artificial Intelligence to develop a genetic programming based system
          to automate the generation of Wireless Sensor Networks (WSN) applications. Used C++
          to develop a simulator for the proposed system. Published several scientific papers.
          Master thesis and developed code available on
          <a
            href="https://github.com/renatorroliveira/master-thesis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>
      <div className="col l6 s12">
        <div className="card-panel black-text">
          <h5>Main publications</h5>
          <div className="collection">
            <a
              href="http://ieeexplore.ieee.org/document/6838743/"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Evaluation of a Genetic Programming Approach to Generate Wireless Sensor
              Network Applications
            </a>
            <a
              href="http://ieeexplore.ieee.org/document/6557775/"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              A Genetic Programming based approach to automatically generate Wireless
              Sensor Networks applications
            </a>
            <a
              href="http://ieeexplore.ieee.org/document/6913217/"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Automatic generation and configuration of Wireless Sensor Networks
              applications with Genetic Programming
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container section">
      <hr />
    </div>

    <div className="row container section">
      <div className="col l6 s12">
        <h5>
          <small className="grey-text text-lighten-3">2012</small><br />
          B.Sc. in Computer Science
        </h5>
        <h6 className="blue-text text-lighten-4">
          Universidade Federal de Lavras, Lavras/MG, Brazil
        </h6>
        <p className="flow-text">
          Worked with Operations Research, Optimization and Artificial Intelligence methods
          during the 3 years of scientific initiation. Developed a method based on
          metaheuristics associated with mathematical programming to solve the Used C++
          and CPLEX callable libraries. Published several scientific papers.
        </p>
      </div>
      <div className="col l6 s12">
        <div className="card-panel black-text">
          <h5>Main publications</h5>
          <div className="collection">
            <a
              href="http://www.sciencedirect.com/science/article/pii/S0305054812002341"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              A hybrid multi-population genetic algorithm applied to solve the multi-level
              capacitated lot sizing problem with backlogging
            </a>
            <a
              href="http://www.sciencedirect.com/science/article/pii/S1568494612001913"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glass container production scheduling through hybrid multi-population based
              evolutionary algorithm
            </a>
            <a
              href="https://dl.acm.org/citation.cfm?doid=2537728.2537729"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              A hybrid cGA applied to the MLCLSP with overtime
            </a>
            <a
              href="http://ieeexplore.ieee.org/document/5949752/"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              A hybrid heuristic approach to solve the multi level capacitated lot sizing problem
            </a>
            <a
              href="https://dl.acm.org/citation.cfm?doid=1774088.1774330"
              className="collection-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Parallel genetic algorithm approaches applied to solve a synchronized and
              integrated lot sizing and scheduling problem
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
