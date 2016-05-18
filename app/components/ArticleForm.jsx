import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import classNames from 'classnames/bind'
import styles from 'css/components/article-form'

const cx = classNames.bind(styles);

class ArticleForm extends React.Component {

  render() {
    // console.log(this.props);
    const { fields: {title, content}, handleSubmit } = this.props
    return (
      <div className={cx('article-form')}>
        <form onSubmit={handleSubmit}>
          <span className={cx('blog-span')}>title: </span>
          <input placeholder="input a blog title" value='' {...title} autoFocus className={cx('input')}/>
        <br/>
        <span className={cx('blog-span')}>content:</span>
        <br />
        <textarea placeholder="input blog content" {...content} className={cx('textarea', 'input')} rows="10"/>
        <br/>
          <button type="submit" className={cx('button','blog-span','submit')}>Compose</button>
        </form>
      </div>
    );
  }

}

ArticleForm.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

ArticleForm = reduxForm({
  form: 'article',
  fields: ['title', 'content']
})(ArticleForm)

export default ArticleForm;
