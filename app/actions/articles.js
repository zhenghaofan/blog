/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */
function makeArticleRequest(method, title, data, api = '/article') {
  return request[method](api + (title ? ('/' + title) : ''), data);
}

/*
 * @param data
 * @return a simple JS object
 */
function createArticleRequest(data) {
  return {
    type: types.CREATE_ARTICLE_REQUEST,
    title: data.title,
    content: data.content
  };
}

function createArticleSuccess() {
  return {
    type: types.CREATE_ARTICLE_SUCCESS
  };
}

function createArticleFailure(data) {
  return {
    type: types.CREATE_ARTICLE_FAILURE,
    title: data.title,
    error: data.error
  };
}

function createArticleDuplicate() {
  return {
    type: types.CREATE_ARTICLE_DUPLICATE
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk mtitledleware
// This function does not need to be pure, and thus allowed
// to have stitlee effects, including executing asynchronous API calls.
export function createArticle(content) {
  return (dispatch, getState) => {
    // If the content box is empty
    if (content.trim().length <= 0) return;

    const title = md5.hash(content);
    // Redux thunk's mtitledleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { article } = getState();
    const data = {
      count: 1,
      title,
      content
    };

    // Conditional dispatch
    // If the article already exists, make sure we emit a dispatch event
    if (article.articles.filter(articleItem => articleItem.title === title).length > 0) {
      // Currently there is no reducer that changes state for this
      // For production you would titleeally have a message reducer that
      // notifies the user of a duplicate article
      return dispatch(createArticleDuplicate());
    }

    // First dispatch an optimistic update
    dispatch(createArticleRequest(data));

    return makeArticleRequest('post', title, data)
      .then(res => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_ARTICLE_SUCCESS
          // on success, but I've opted to leave that out
          // since we already dtitle an optimistic update
          // We could return res.json();
          return dispatch(createArticleSuccess());
        }
      })
      .catch(() => {
        return dispatch(createArticleFailure({ title, error: 'Oops! Something went wrong and we couldn\'t create your article'}));
      });
  };
}

// Fetch posts logic
export function fetchArticles() {
  return {
    type: types.GET_ARTICLES,
    promise: makeArticleRequest('get')
  };
}

export function destroyArticle(title, index) {
  return dispatch => {
    dispatch(destroy(index));
    return makeArticleRequest('delete', title);
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}
