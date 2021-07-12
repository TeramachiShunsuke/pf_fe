import {
//    createStore as reduxCreateStore,
    combineReducers,
    // applyMiddleware,
} from 'redux';
import {connectRouter,routerMiddleware} from 'connected-react-router'
import userReducers from '../users/reducers';
// import { createBrowserHistory, History } from 'history';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// export default function createStore(history: History){
//     return reduxCreateStore(
//         combineReducers({
//             router: connectRouter(history),
//             users:userReducers
//         }),
//         applyMiddleware(
//             routerMiddleware(history)
//         )
//     )
// }

export const history = createBrowserHistory();
const reducer = combineReducers({
    router:connectRouter(history),
    users: userReducers
})

// const store = configureStore();
export type RootState = ReturnType<typeof reducer>

export const store = configureStore({
    reducer,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(routerMiddleware(history))
    }
})
