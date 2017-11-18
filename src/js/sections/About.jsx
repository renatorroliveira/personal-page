import React from 'react';

import ProfileImage from '@/assets/profile2.png';

export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE7FB;</i><br />
      About me
    </h3>
    <div className="container section">
      <img className="left" src={ProfileImage} alt="Myself" />
      <p>
        <b>Name:</b> Renato Resende Ribeiro de Oliveira<br />
        <b>Age:</b> 28 years old<br />
        <b>Experience as a developer:</b> 9 years<br />
        <b>Current location:</b> Concórdia/SC, Brazil<br />
      </p>


      <p className="flow-text">
        <b>Summary:</b><br />
        Hello there, I am Renato. I am a passionated software developer, architect
        and entusiastic. I have 9 years of development experience, including desktop, web
        and scientific programming experiences. I have knowledge of many different languages,
        patterns and I am very addicted to learning. I love experimenting new technologies
        and innovative approaches.
      </p>
      <p className="flow-text">
        Regarding my personality, I am a very pro-active guy that loves development.
        I enjoy high pressure situations and fast paced environments. I&apos;ve worked as a
        CTO and faced many hard challenges, both in the technical and business perspectives.
        I don&apos;t like complaints, I like calm and calculated actions.
      </p>

      <p className="flow-text">
        <b>History:</b><br />
        I consider that I started my carreer when I was a
        teenager. When I was 13 years old I started studying HTML all by myself on the
        internet. Then a year later I was already writing my own algorithms to develop
        macros to online games, some of these macros reached 300 lines.
      </p>
      <p className="flow-text">
        When I reached 18 years old I started my B.Sc. in Computer Science and found
        my passion. At the second quarter of the first year I was already practicing
        Java and Object Oriented Programming on my own. At the beginning of my second
        year I started my first web application project using PHP and MySQL.
      </p>
      <p className="flow-text">
        Since then I never stopped developing web and mobile applications. I got my
        Masters degree in 2014 and co-founded an IT startup last quarter in 2013.
        Last year I started to work as a Professor at a federal institute of science,
        technology and innovation.
      </p>
    </div>
  </div>
);
