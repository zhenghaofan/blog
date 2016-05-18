import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Articles from 'components/Articles';
import { fetchArticles } from 'actions/articles';
import styles from 'css/components/article-main';

const cx = classNames.bind(styles);

class ArticleMain extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchArticles
  ]

  constructor(props) {
    super(props);
  }

  render() {
    const {articles} = this.props;
    return (
      <div className={cx('article-main')}>
        <Articles articles={articles}/>
      </div>
    );
  }
}

ArticleMain.propTypes = {
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    articles: state.article.articles,
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(ArticleMain);
