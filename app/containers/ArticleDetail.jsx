import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Article from 'components/Article';
import { fetchArticleByTitle } from 'actions/articles';
import styles from 'css/components/article-main';

const cx = classNames.bind(styles);

class ArticleDetail extends Component {

  constructor(props) {
    super(props);
    // console.log(props);
    const { dispatch } = this.props
    dispatch(fetchArticleByTitle(props.routeParams.title));
  }

  render() {
    // console.log(this.props);
    const { article } = this.props
    return (
      <div className={cx('article-detail')}>
        <h1>{article.title}</h1>
        <div className={cx('content')}>
          {article.content}
        </div>
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    article: state.article.article
  };
}

// const mapDispatchToProps = dispatch =>{
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(ArticleDetail);
