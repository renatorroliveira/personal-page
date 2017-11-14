import React from 'react';
import PropTypes from 'prop-types';
import LinkWrapper from '@/js/Link';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <nav className="grey darken-4 hide-on-med-and-down">
        <div className="nav-wrapper container">
          <LinkWrapper
            className="brand-logo"
            to={this.props.logoId}
            onClick={this.props.onNavigate}
          >
            Renato Oliveira
          </LinkWrapper>
          <ul id="nav-mobile" className="right">
            {this.props.sections.map(section => (
              <li key={section.id}>
                <LinkWrapper to={section.id} onClick={this.props.onNavigate}>
                  {section.label}
                </LinkWrapper>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  logoId: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};
