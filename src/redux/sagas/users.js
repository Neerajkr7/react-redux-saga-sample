import {put,takeLatest} from 'redux-saga/effects'


export function* UpdateList(action){
    try{
        yield put({type:'NEW_ENTRY_REQUEST_SUCCESS',payload:action.payload})
    }catch(err){
        yield put({type:'NEW_ENTRY_REQUEST_FAILED'})
    }
}


export function* WatchNewEntryRequest(){
    yield takeLatest('UPDATE_LIST_REQUEST',UpdateList)
}

