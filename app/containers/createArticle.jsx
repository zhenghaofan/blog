import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleForm from 'components/ArticleForm';
import * as Actions from 'actions/articles'
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
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  handleSubmit(article) {
    // const { actions } = this.props;
    this.actions.createArticle(article.title, article.content);
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

// const mapDispatchToProps = dispatch =>{
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

export default connect()(CreateArticle) //只注入dispatch

// if needs data-fetching
// function mapStateToProps(state) {
//   return {...state.article}
// }

// export default connect(mapStateToProps)(CreateArticle);
