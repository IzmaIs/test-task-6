import actionsTypes from "./actionsTypes";
import {setCurrentUser, setUser, resetUser} from "../../types/typesForReduxUser";
import {Dispatch} from "redux";

const setNewUser: (user: setCurrentUser) => (dispatch: Dispatch<setUser>) => void = (user:setCurrentUser) => {
    return (dispatch: Dispatch<setUser>) => {
        dispatch({type: actionsTypes.setUser, user})
    }
}

const resetUsers: () => (dispatch: Dispatch<resetUser>) => void = () => {
    return (dispatch: Dispatch<resetUser>) => {
        dispatch({type: actionsTypes.resetUser})
    }
}

export default {setNewUser, resetUsers}