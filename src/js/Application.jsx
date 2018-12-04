import React from 'react';

import Footer from '@/js/Footer';
import Menu from '@/js/Menu';
import SocialLinks from '@/js/SocialLinks';

import Section from '@/js/sections/Section';
import About from '@/js/sections/About';
import Education from '@/js/sections/Education';
import Personal from '@/js/sections/Personal';
import Projects from '@/js/sections/Projects';
// import Skills from '@/js/sections/Skills';
import Work from '@/js/sections/Work';

const MenuSections = [{
  id: 'about',
  label: 'About me',
}, {
  id: 'projects',
  label: 'Projects',
}, {
  id: 'work',
  label: 'Work experience',
}, {
  id: 'education',
  label: 'Education',
}, {
  id: 'personal',
  label: 'Personal',
}];

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.navigate = this.navigate.bind(this);
    this.render = this.render.bind(this);

    this.sections = {};
  }
  navigate(section) {
    const el = this.sections[section];
    if (typeof el.go === 'function') {
      el.go();
    } else {
      this.mainContainer.scrollTo(0, el.offsetTop);
    }
  }

  render() {
    return (
      <main className="block" ref={(c) => { this.mainContainer = c; }}>
        <div className="top-parallax" />
        <Menu onNavigate={this.navigate} sections={MenuSections} logoId="welcome" />
        <div id="welcome" className="main-container" ref={(c) => { this.sections.welcome = c; }}>
          <h5>Welcome! I am Renato Oliveira, MSc., PMP. My main roles are</h5>
          <h1>Senior Fullstack Developer &amp; Tech Leader</h1>
          <SocialLinks />
        </div>

        <Section id="about" ref={(c) => { this.sections.about = c; }}>
          <About />
        </Section>

        <Section
          id="projects"
          className="blue-grey darken-4 white-text"
          ref={(c) => { this.sections.projects = c; }}
        >
          <Projects />
        </Section>

        <Section
          id="work"
          className="white"
          ref={(c) => { this.sections.work = c; }}
        >
          <Work />
        </Section>

        <Section
          id="education"
          className="green darken-4 white-text"
          ref={(c) => { this.sections.education = c; }}
        >
          <Education />
        </Section>

        {/*
        <Section
          id="skills"
          className="white"
          ref={(c) => { this.sections.skills = c; }}
        >
          <Skills />
        </Section>
        */}

        <Section
          id="personal"
          className="white"
          ref={(c) => { this.sections.personal = c; }}
        >
          <Personal />
        </Section>

        <Footer />
      </main>
    );
  }
}
