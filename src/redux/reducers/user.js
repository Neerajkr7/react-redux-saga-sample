const initialState ={
    list:[]
}


export default function UserReducer(state = initialState,action){
    switch(action.type){
        case 'NEW_ENTRY_REQUEST_SUCCESS':
            return{
                ...state,
                list: state.list.concat(action.payload)
            }
        default :
        return state
    }
}