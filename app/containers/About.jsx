import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const About = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>About Billa's Blog</h1>
      <div className={cx('description')}>
        <p>
           This blog is inspired by react-webpack-node
        </p>
      </div>
    </div>
  );
};

export default About;
