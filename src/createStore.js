import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// import { app } from './modules'
import { user, owner, investor } from './modules'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    // [app.NAME]: app.reducer,
    [user.NAME]: user.reducer,
    [owner.NAME]: owner.reducer,
    [investor.NAME]: investor.reducer,
  })

  return createStore(rootReducer, data, middleware)
}