import React from "react";
import {setCurrentUser} from "../types/typesForReduxUser";

export const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>, setFunction: (p: (prevState: any) => any) => void, isDigit: boolean = false) => {
    const name = e.target.name
    const text = e.target.value
    setFunction(prevState => ({...prevState, [name]: isDigit ? +text : text}))
}