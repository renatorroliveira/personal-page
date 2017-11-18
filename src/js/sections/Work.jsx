import React from 'react';

import LinkWrapper from '@/js/Link';

export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE8F9;</i><br />
      Work experience
    </h3>

    <div className="flex-row container section">

      <div className="flex-col large">
        <h5>
          <small>Aug/2016 - present</small><br />
          Professor, <a href="http://concordia.ifc.edu.br/">Instituto Federal Catarinense</a>
        </h5>
        <h6>
          Concórdia, SC, Brazil
        </h6>
        <p className="flow-text">
          I teach and train students on full stack web and mobile development in technology
          courses, preparing them to be developers ready to work on the IT market.
        </p>
        <p className="flow-text">
          I lead research and technology projects on web platforms development such
          as <LinkWrapper to="algod">Algorithm God (AlGod)</LinkWrapper>
          , <LinkWrapper to="zootec">Zootec</LinkWrapper> and&nbsp;
          <LinkWrapper to="vetec">Vetec</LinkWrapper>.
        </p>
        <p className="flow-text">
          I use many technologies in this position, like <b>Java</b>, <b>Python</b>
          , <b>PHP</b>, <b>Javascript (ES6)</b>, <b>React</b>, <b>Vue.js</b>, <b>Webpack</b>
          , <b>NodeJS</b>, <b>MySQL</b>, <b>Cordova</b> and <b>Android SDK</b>.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small>Aug/2013 - Jul/2016</small><br />
          CTO, <a href="http://www.progolden.com.br/">ProGolden Technology Solutions</a>
        </h5>
        <h6>
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          I co-founded this IT startup and worked as it&apos;s CTO for 3 years. I continue
          to help on the company management and technical decisions. During this time
          I had the following responsabilities:
          lead development teams;
          softwares architectures development;
          administration of company&apos;s server and infrastructure;
          and requirements analysis with stakeholders.
        </p>
        <p className="flow-text">
          Led some projects development such as&nbsp;
          <LinkWrapper to="uainov">Uainov</LinkWrapper>
          , <LinkWrapper to="premioideia">PrêmioIdeia</LinkWrapper>
          &nbsp;and <LinkWrapper to="forpdi">ForPDI</LinkWrapper>.
        </p>
        <p className="flow-text">
          I used many technologies in this position, like <b>Java</b>, <b>Javascript (ES6)</b>
          , <b>React</b>, <b>Webpack</b>, <b>ExtJS</b>, <b>NodeJS</b>, <b>MySQL</b>
          , <b>Oracle</b>, <b>JUnit</b>,  <b>JMeter</b>, <b>AWS</b>
          , <b>Cordova</b> and <b>Android SDK</b>.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small>Mar/2012 - present</small><br />
          Freelancer Developer
        </h5>
        <h6>
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          I worked in web platforms projects as a freelancer developer in free time.
          Some projects I worked on aren’t online anymore, but as an recent example
          I can mention the <LinkWrapper to="ilevus">ilevus</LinkWrapper> platform.
        </p>
        <p className="flow-text">
          I&apos;ve used technologies like <b>Java</b>, <b>Node.js</b>, <b>C#/.NET</b>
          , <b>PHP</b>, <b>React</b>, <b>Angular 1</b>, <b>Webpack</b>, <b>JUnit</b>
          , <b>MySQL</b> and <b>MongoDB</b>.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small>Aug/2011  - Feb/2012</small><br />
          Software Engineer, <a href="http://www.sydle.com/">SYDLE</a>
        </h5>
        <h6>
          Belo Horizonte, MG, Brazil
        </h6>
        <p className="flow-text">
          I worked as part of a Scrum development team acting as a full stack developer
          on the <a href="https://www.sydle.com/en/bpm/">company’s BPMS</a>. Wonderful company
          to work at. I had left this position to do my masters degree course.
        </p>
        <p className="flow-text">
          I&apos;ve used <b>Java</b>, <b>ExtJS</b>, <b>JUnit</b>, <b>Oracle</b>
          &nbsp;and <b>PL/SQL</b> technologies.
        </p>
      </div>

      <div className="flex-col large">
        <h5>
          <small>Jul/2009 - Jul/2011</small><br />
          Software Developer, <a href="http://www.ufla.br/">Universidade Federal de Lavras</a>
        </h5>
        <h6>
          Lavras, MG, Brazil
        </h6>
        <p className="flow-text">
          I worked as a full stack web developer in two platforms of my bachelor course university.
          The projects are <LinkWrapper to="ciuflasig">CIUFLASIG</LinkWrapper> and&nbsp;
          <LinkWrapper to="sigepic">SIGEPIC</LinkWrapper>.
        </p>
        <p className="flow-text">
          I&apos;ve used <b>PHP</b>, <b>jQuery</b> and <b>MySQL</b> technologies.
        </p>
      </div>
    </div>
  </div>
);
