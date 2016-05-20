import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_SINGLE_ARTICLE_REQUEST,
  GET_SINGLE_ARTICLE_SUCCESS,
  GET_SINGLE_ARTICLE_FAILURE,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  // DESTROY_ARTICLE
} from 'types';


export default function article(state = {
  articles: [],
}, action) {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.req.data
      });
    case GET_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_SINGLE_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        article: action.req.data
      });
    case GET_SINGLE_ARTICLE_FAILURE:
      return {
        articles: [...state.articles]
      };
    case CREATE_ARTICLE_REQUEST:
      return {
        articles: [...state.articles, { title: action.title, content: action.content }],
      };
    case CREATE_ARTICLE_FAILURE:
      return {
        articles: [...state.articles.filter((article) => article.title !== action.title)],
      };

    // case DESTROY_ARTICLE:
    //   return {
    //     articles: [...state.articles.filter((tp, i) => i !== action.index)],
    //   };

    default:
      return state;
  }
}
