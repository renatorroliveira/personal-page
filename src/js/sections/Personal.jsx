import React from 'react';

import FishingPirararaImage from '@/assets/fishing-pirarara.jpg';
import FishingPirarucuImage from '@/assets/fishing-pirarucu.jpg';
import GamingImage from '@/assets/gaming.png';

export default () => (
  <div>
    <h3 className="center">
      <i className="material-icons huge">&#xE866;</i><br />
      Personal
    </h3>

    <div className="container section">
      <img alt="Fishing a Pirarucu" src={FishingPirarucuImage} className="left" style={{ height: '250px' }} />
      <p className="flow-text">
        I am a very funny and energic guy that loves a good party. But I Also
        have more zen hobbies as well! I love playing PC games and sport fishing.
        I also like to play some outdoor sports like soccer and watching e-sports competitions.
      </p>
      <img alt="Fishing a Pirarara" src={FishingPirararaImage} className="right" style={{ height: '250px' }} />
      <p className="flow-text">
        Besides my hobbies, I love my job and I am addicted to learning new technologies and
        developing new apps and platforms. The innovation and change are in my blood, so you
        will always see movement in my life.
      </p>
      <img alt="My Steam" src={GamingImage} className="left" style={{ height: '250px' }} />
      <p className="flow-text">
        You can easily find me on Steam playing some Dota or in Twitch watching some e-sports
        on my free time. Except when I am on a lake or river fishing =)
      </p>
      <div style={{ clear: 'both' }} />
    </div>
  </div>
);
