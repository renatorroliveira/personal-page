import React from 'react';

export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE8F9;</i><br />
      Work experience
    </h3>

    <div className="flex-row container section">

      <div className="flex-col large">
        <h5>
          <small className="grey-text">Aug/2016 - present</small><br />
          Professor, <a href="http://concordia.ifc.edu.br/">Instituto Federal Catarinense</a>
        </h5>
        <h6 className="blue-text text-darken-4">
          Concórdia, SC, Brazil
        </h6>
        <p className="flow-text">
          Teaching and training on full stack web and mobile development in technology
          courses, including HTML5, CSS3, advanced Javascript (ES6), backend in Java,
          JavaScript (Node.js) and PHP, MySQL database, Cordova and native Android mobile
          development.
          Led research and technology projects on web platforms development, such as:
          Algorithm God (AlGod): Open source web platform for programming teaching and
          learning. It features automatic code evaluation and online tests monitoring.
          Originally developed with PHP and jQuery, a version 2 is in current development
          with Java EE and Vue.js framework, bundling the view with Webpack.
          Internal institute management systems available at informatics course’s GitHub
          page. Development using Java EE platform, JPA/Hibernate and JSP based views using
          jQuery and frameworks like Bootstrap and Materialize.
          Zootec: Platform to manager the zootechny department. Animals birth and ration
          production management.
          Vetec: Platform to manage the veterinary clinic. Consultations scheduling and
          registration of surgeries’ information.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small className="grey-text">Aug/2013 - Jul/2016</small><br />
          CTO, <a href="http://www.progolden.com.br/">ProGolden Technology Solutions</a>
        </h5>
        <h6 className="blue-text text-darken-4">
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          CTO and co-founder of this IT startup.
          Management of the entire IT sector, including leading development teams,
          platform’s architecture development, contact with stakeholder for requirements
          analysis, administration of company’s servers (all Linux) and IT structure,
          strategic planning, DBA and full stack development.
          Worked with agile development methodologies, mainly SCRUM.
          Led the development of many software projects:
          PrêmioIdeia: Multi tenant, private code web platform for innovation management
          and crowd sourcing. Developed using MySQL database, Java EE backend with
          JPA/Hibernate ORM, ExtJS frontend and Maven build. Coordinated JMeter based
          load tests and configured a 10 machines cluster using Wildfly application server
          and Apache’s HTTPD mod_cluster for load balancing.
          Uainov: Multi tenant, private code web platform to manage companies’ employees
          suggestions and feedback. Developed using MySQL database, Java EE backend with
          JPA/Hibernate ORM, React frontend, Webpack bundling.
          ForPDI: Multi tenant, open source web platform to facilitate the strategic and
          institutional planning of the Brazilian Federal Universities, using MySQL, Java EE
          backend with JPA/Hibernate ORM and React frontend with Webpack bundling.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small className="grey-text">Mar/2012 - present</small><br />
          Freelancer Developer
        </h5>
        <h6 className="blue-text text-darken-4">
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          Worked in web platforms projects as a freelancer developer.
          Worked with Java EE, Node.js, C#/.NET Platform, PHP, Angular 1, MySQL and
          MongoDB, some projects worked on (some of them aren’t online anymore):
          Ilevus: Coaching community. Developed with MongoDB, C# backend and React
          frontend with Webpack bundling. Architected the software from the scratch.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small className="grey-text">Aug/2011  - Feb/2012</small><br />
          Software Engineer, <a href="http://www.sydle.com/">SYDLE</a>
        </h5>
        <h6 className="blue-text text-darken-4">
          Belo Horizonte, MG, Brazil
        </h6>
        <p className="flow-text">
          Worked as part of a SCRUM development team working as a full stack developer
          on the company’s BPMS: Sydle BPM
          Worked with Java EE, Oracle, PL/SQL and ExtJS frontend.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small className="grey-text">Jul/2009 - Jul/2011</small><br />
          Software Developer, <a href="http://www.ufla.br/">Universidade Federal de Lavras</a>
        </h5>
        <h6 className="blue-text text-darken-4">
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          Worked as a full stack web developer in two platforms of the university:
          CIUFLASIG: A web platform to manage the scientific initiation congress of
          the university. Manage subscriptions, scientific texts submissions, certificates
          and congress annals publication.
          SIGEPIC: and a management platform for the institutional scientific scholarship
          programs. Manage project proposals submissions, projects evaluations, ranking
          projects, execution reports submissions and certificates.
          Worked with PHP, jQuery and MySQL on both projects.
        </p>
      </div>
    </div>
  </div>
);
