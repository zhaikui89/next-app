import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
const defaultState = {
    count: 0,
    num: 0
}
const userState = {
    userName: ''
}
function count(state = defaultState, action) {
    switch (action.type) {
        case 'num':
            return {...state, num:action.num}
        default:
            return state
    }
}
function user(state = userState, action) {
    switch (action.type) {
        case 'num':
            return {
                ...state,
                userName: action.data
            };
        default:
            return state
    }
}
function createAction(num) {
    return (dispatch) =>  dispatch({ num, type: 'num' })
}
const allReducer = combineReducers({
    user, count
})
const store = createStore(
    allReducer,
    {
        user: userState,
        count: defaultState
    },
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store)
console.log(store.getState())
console.log(store.dispatch(createAction(2)))
export default store