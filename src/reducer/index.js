import { combineReducers } from 'redux'

const reducers = combineReducers({

})

const rootReducers = (state, action) => {
  console.log('================ REDUCERS ================', state, action)

  return reducers(state, action);
};

export default rootReducers;