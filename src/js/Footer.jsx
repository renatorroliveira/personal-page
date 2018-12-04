import React from 'react';

import SocialLinks from '@/js/SocialLinks';

export default () => (
  <footer className="page-footer black">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5>Contact</h5>
          <p>
            <i className="material-icons">&#xE0C8;</i>Brasília, DF - Brazil - 70675-406
          </p>
          <p>
            <i className="material-icons">&#xE0E1;</i> renatorro <i>at</i> comp.ufla.br
          </p>
          <p>
            <i className="material-icons">&#xE324;</i> Skype: renatorro.comp.ufla.br
          </p>
        </div>
        <div className="col l6 s12 center-align">
          <h5>Social</h5>
          <SocialLinks />
          <div>
            This page&apos;s source code is available
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
      © 2018 - Renato R. R. de Oliveira. Powered with React, Materialize, SASS and Webpack.
      </div>
    </div>
  </footer>
);
