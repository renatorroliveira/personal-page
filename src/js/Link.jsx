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
};
Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};
