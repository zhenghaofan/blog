import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import ArticleForm from 'components/ArticleForm';
import { createArticle } from 'actions/articles'
import classNames from 'classnames/bind'
import styles from 'css/components/create-article'

const cx = classNames.bind(styles);
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */

class CreateArticle extends Component {

  constructor(props) {
    super(props);
    // event handlers for MainSection component
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(article) {
    const { dispatch } = this.props;
    dispatch(createArticle(article.title, article.content));
  }

  render() {
    return (
      <div className={cx('create-article-container')}>
        <h1>Compose A Blog</h1>
        <ArticleForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
};

export default CreateArticle

// if needs data-fetching
// function mapStateToProps(state) {
//   return {...state.article}
// }

// export default connect(mapStateToProps)(CreateArticle);
