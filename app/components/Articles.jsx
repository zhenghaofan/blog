import React, { PropTypes } from 'react';
import Article from 'components/Article';
import classNames from 'classnames/bind';
import styles from 'css/components/articles';

const cx = classNames.bind(styles);

const Articles = ({articles}) => {
  const articleItems = articles.map((article, key) => {
    return (
      <Article title={article.title} key={key} content={article.content}
      />);
    });

  return (
    <div className={cx('articles')}>
      <h1>Recent Articles</h1>
      <div classNames={cx('articleItems')}>{articleItems}</div>
    </div>
  );
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
