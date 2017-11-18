import $ from 'jquery';
import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.to);
  }

  render() {
    return (
      <a href={`#${this.props.to}`} className={this.props.className} onClick={this.onClick}>
        {this.props.children}
      </a>
    );
  }
}
Link.defaultProps = {
  children: '',
  className: '',
  onClick: (to) => {
    const el = $(`#${to}`)[0];
    if (el) {
      const parent = el.offsetParent;
      parent.scrollTo(0, el.offsetTop);
    } else {
      throw new Error('No element found to scroll to.');
    }
  },
};
Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};
