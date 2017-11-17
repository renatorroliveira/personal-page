import React from 'react';

import SocialLinks from '@/js/SocialLinks';

export default () => (
  <footer className="page-footer black">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5>Contact</h5>
          <p>
            <i className="material-icons">&#xE0C8;</i>Concórdia, SC - Brazil - 89710-153
          </p>
          <p>
            <i className="material-icons">&#xE0E1;</i> renatorro[a]comp.ufla.br
          </p>
          <p>
            <i className="material-icons">&#xE324;</i> +55 49 99150 9631
          </p>
        </div>
        <div className="col l6 s12 center-align">
          <h5>Social</h5>
          <SocialLinks />
          <div>
            This page&apos;s code is available
            on <a
              href="https://github.com/renatorroliveira/personal-page"
              target="_blank"
              rel="noopener noreferrer"
            > GitHub
               </a>.
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container center-align">
      © 2017 - Renato R. R. de Oliveira
      </div>
    </div>
  </footer>
);
