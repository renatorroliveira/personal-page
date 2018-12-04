import React from 'react';
import PropTypes from 'prop-types';

export default class Section extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  go() {
    const ct = this.el.offsetParent;
    ct.scrollTo(0, this.el.offsetTop - 50);
  }

  render() {
    return (
      <section
        id={this.props.id}
        className={`block section ${this.props.className}`}
        ref={(c) => { this.el = c; }}
      >
        {this.props.children}
      </section>
    );
  }
}
Section.defaultProps = {
  className: 'white',
};
Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(Object),
    PropTypes.string,
  ]).isRequired,
  id: PropTypes.string.isRequired,
};
