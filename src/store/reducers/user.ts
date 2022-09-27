import actionsTypes from "../actions/actionsTypes";
import {setUser} from "../../types/typesForReduxUser";

const initialState: (null) = null

const reducer = (state = initialState, action: setUser) => {
    switch (action.type) {
        case actionsTypes.setUser:
            return action.user
        case actionsTypes.resetUser:
            return null;
        default:
            return state;
    }
}

export default reducer;