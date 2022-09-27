import { applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

const initialState: (object) = {}

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
export default store;
