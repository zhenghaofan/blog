import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import classNames from 'classnames/bind';
import styles from 'css/components/article';

const cx = classNames.bind(styles);

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={"/article/" + this.props.title}>
          <h3>{this.props.title}</h3>
          <div>
            {this.props.content}
          </div>
        </Link>
      </div>
    );
  }
}

Article.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
