import React from 'react';

import ForPDIScreen from '@/assets/forpdi.jpg';
import AlGodScreen from '@/assets/algod.jpg';
import UainovScreen from '@/assets/uainov.jpg';
import PremioIdeiaScreen from '@/assets/premioideia.jpg';
import IlevusScreen from '@/assets/ilevus.jpg';
import ZootecScreen from '@/assets/zootec.jpg';
import VetecScreen from '@/assets/vetec.jpg';
import CiuflasigScreen from '@/assets/ciuflasig.jpg';
import SigepicScreen from '@/assets/sigepic.jpg';


export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE871;</i><br />
      Projects
    </h3>

    <div className="flex-row container section">

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="Uainov"
              src={UainovScreen}
              className="materialboxed"
              data-caption="Uainov, web platform for innovation management."
            />
            <span className="card-title">Uainov</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2016 - present</h6>
            <p>
              Multi tenant web platform for companies&apos; innovation management.
              Developed using <b>Java EE</b> (VRaptor framework)
              , <b>React</b> and <b>Materialize</b>. Bundled with <b>Webpack</b>
              , <b>MySQL</b> database, <b>JMeter</b> stress tests, <b>AWS</b> platform
              and cloud clustering with <b>Wildfly</b> application server.
              Performed all the DevOps of the infrastructure.
            </p>
          </div>
          <div className="card-action">
            <a
              href="http://www.uainov.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Homepage"
            >
              <i className="material-icons">&#xE051;</i>
            </a>
            <a
              href="http://app.uainov.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="ForPDI"
              src={ForPDIScreen}
              className="materialboxed"
              data-caption="ForPDI, web platform for strategic planning."
            />
            <span className="card-title">ForPDI</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2015 - present</h6>
            <p>
              Multi tenant, open source web platform to facilitate the strategic and
              institutional planning of the Brazilian Federal Universities,
              using MySQL, <b>Java EE</b> (VRaptor framework) backend with JPA/Hibernate
              ORM and <b>React</b> (flux) frontend with <b>Webpack</b> bundling.
              Performed all the DevOps of the infrastructure.
            </p>
          </div>
          <div className="card-action">
            <a
              href="https://github.com/forpdi/forpdi"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Repository"
            >
              <i className="material-icons">&#xE86F;</i>
            </a>
            <a
              href="http://forpdi.org"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Homepage"
            >
              <i className="material-icons">&#xE051;</i>
            </a>
            <a
              href="http://app.forpdi.org"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="PrêmioIdeia"
              src={PremioIdeiaScreen}
              className="materialboxed"
              data-caption="PrêmioIdeia, web platform for crowd sourcing."
            />
            <span className="card-title">PrêmioIdeia</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2013 - present</h6>
            <p>
              Multi tenant web platform for companies&apos; innovation management
              and crowd sourcing processes. Developed using <b>Java EE</b> (VRaptor
              framework), <b>Sencha ExtJS</b> platform, <b>MySQL</b> database
              , <b>JMeter</b> stress tests, <b>AWS</b> platform, <b>Cordova</b> mobile
              apps and cloud clustering with <b>Wildfly</b> application server.
              Performed all the DevOps of the infrastructure.
            </p>
          </div>
          <div className="card-action">
            <a
              href="http://www.premioideia.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Homepage"
            >
              <i className="material-icons">&#xE051;</i>
            </a>
            <a
              href="http://app.premioideia.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
            <a
              href="https://play.google.com/store/apps/developer?id=Pr%C3%AAmioIdeia"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Android apps at Google's Play Store"
            >
              <i className="material-icons">&#xE859;</i>
            </a>
            <a
              href="https://itunes.apple.com/br/app/solu%C3%A7%C3%A3o-nota-10/id970558393?mt=8"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="iOS apps at Apple's App Store"
            >
              <i className="material-icons">&#xE325;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="AlGod"
              src={AlGodScreen}
              className="materialboxed"
              data-caption="Algorrithm God, platform for programming learning."
            />
            <span className="card-title">AlGod</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2012 - present</h6>
            <p>
              Open source web platform for programming teaching and learning.
              It features automatic code evaluation and online tests monitoring.
              Originally developed with <b>PHP</b>, <b>jQuery</b> and <b>MySQL</b>.
              A version 2 is under development with <b>Java EE</b>
              , <b>Vue.js</b> and <b>Webpack</b>.
              Performed all the DevOps of the infrastructure.
            </p>
          </div>
          <div className="card-action">
            <a
              href="https://github.com/renatorroliveira/algod"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Repository"
            >
              <i className="material-icons">&#xE86F;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="ilevus"
              src={IlevusScreen}
              className="materialboxed"
              data-caption="ilevus, web coaching community."
            />
            <span className="card-title">ilevus</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2016 - 2017</h6>
            <p>
              Web platform to support coaching processes, with tools, customizable
              processes and social network like features.
              Worked with the architecture, <b>NET/C#</b>, <b>Raact</b>
              , <b>Webpack</b> and <b>MongoDB</b>.
            </p>
          </div>
          <div className="card-action">
            <a
              href="https://www.ilevus.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="Zootec"
              src={ZootecScreen}
              className="materialboxed"
              data-caption="Zootec, web platform to manage the Zootechny Department."
            />
            <span className="card-title">Zootec</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2017 - present</h6>
            <p>
              Web platform to manage the zootechny department of the Instituto Federal
              Catarinense (IFC), an innovation and technology education institute in Brazil.
              It manages the cattle and pigs farming. It also manages the ration production
              for those animals. Developed with <b>Java EE</b>, <b>JSP</b>, <b>jQuery</b>
              , <b>Bootstrap</b> and <b>MySQL</b>.
            </p>
          </div>
          <div className="card-action">
            <a
              href="https://github.com/info-ifc-concordia/zootec"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Repository"
            >
              <i className="material-icons">&#xE86F;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="Vetec"
              src={VetecScreen}
              className="materialboxed"
              data-caption="Vetec, web platform to manage the veterinary clinic."
            />
            <span className="card-title">ilevus</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2017 - present</h6>
            <p>
              Web platform to manage the veterinary clinic of the Instituto Federal
              Catarinense (IFC), an innovation and technology education institute in Brazil.
              It manages consultation booking and surgeries information. Developed
              with <b>Java EE</b>, <b>JSP</b>, <b>jQuery</b>
              , <b>Materialize</b> and <b>MySQL</b>.
            </p>
          </div>
          <div className="card-action">
            <a
              href="https://github.com/info-ifc-concordia/vetec"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Repository"
            >
              <i className="material-icons">&#xE86F;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="CIUFLASIG"
              src={CiuflasigScreen}
              className="materialboxed"
              data-caption="CIUFLA, web platform to manage the scientific initiation congress."
            />
            <span className="card-title">CIUFLASIG</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2011</h6>
            <p>
              Second web application developed in the career. It is a management
              platform for the scientific initiation congress of the university,
              including submissions and subscriptions. Developed with <b>PHP</b>
              , <b>jQuery</b> and <b>MySQL</b>. Performed all the DevOps procedures
              to deploy the application.
            </p>
          </div>
          <div className="card-action">
            <a
              href="http://www.prp.ufla.br/ciuflasig/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
          </div>
        </div>
      </div>

      <div className="flex-col">
        <div className="card">
          <div className="card-image">
            <img
              alt="SIGEPIC"
              src={SigepicScreen}
              className="materialboxed"
              data-caption="SIGEPIC, web platform to manage scholarship processes."
            />
            <span className="card-title">SIGEPIC</span>
          </div>
          <div className="card-content black-text">
            <h6 className="project-period">2009 - 2011</h6>
            <p>
              First web application developed in the career. It is a management
              platform for the scholarship processes of the university, This includes
              submissions of proposal, review and evaluation, documentation and ranking
              processes. Developed with <b>PHP</b>, <b>jQuery</b> and <b>MySQL</b>.
              Performed all the DevOps procedures to deploy the application.
            </p>
          </div>
          <div className="card-action">
            <a
              href="http://www.prp.ufla.br/editais/"
              rel="noopener noreferrer"
              target="_blank"
              className="tooltipped"
              data-tooltip="Application"
            >
              <i className="material-icons">&#xE5C3;</i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
);
