import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';
import article from 'reducers/article';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing,
  article,
  form: formReducer
});

export default rootReducer;
