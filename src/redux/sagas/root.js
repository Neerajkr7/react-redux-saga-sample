import {all} from 'redux-saga/effects'
import {WatchNewEntryRequest} from './users'
import {watchAndLog} from './logger'
export default function* rootSaga(){
    yield all([
        WatchNewEntryRequest(),
        watchAndLog()
    ])
}