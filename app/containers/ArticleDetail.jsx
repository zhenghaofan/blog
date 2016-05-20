import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Article from 'components/Article';
import { fetchArticleByTitle } from 'actions/articles';

import classNames from 'classnames/bind';
import styles from 'css/components/article-detail';

const cx = classNames.bind(styles);

class ArticleDetail extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchArticleByTitle(this.props.routeParams.title));
  }

  render() {
    // console.log(this.props);
    const { article } = this.props
    let content
    if (article) {
      content = (
        <div>
          <h1>{article.title}</h1>
          <div>
          {article.content}
          </div>
        </div>
      )
    }

    return (
      <div className={cx('article-detail')}>
        {content}
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  article: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    article: state.article.article
  };
}

export default connect(mapStateToProps)(ArticleDetail);
