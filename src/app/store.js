import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware, syncHistoryWithStore } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export default (initialState = {}) => {
    const combine = process.env.DEBUG ? composeWithDevTools : compose;

    const history = createHistory();

    const store = createStore(combineReducers({
        ...reducers,
        router: routerReducer
    }), initialState,
        combine(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    );

    if (process.env.DEBUG && module.hot) module.hot.accept('./reducers', () =>
        store.replaceReducer(require("./reducers").default)
    );

    return { store, history };
}