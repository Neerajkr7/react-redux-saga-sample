import {createStore,applyMiddleware} from 'redux'

import createSagaMiddleWare from 'redux-saga'

import RootSaga from './sagas/root'

import rootReducer from './reducers/rootReducer'

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleWare)
  )

  sagaMiddleWare.run(RootSaga)

// export const action  = (type,payload='') => store.dispatch({type,payload})

export default store