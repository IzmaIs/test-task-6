export type setCurrentUser = {
    firstName: string,
    lastName: string,
    companyName: string,
    phone: number | undefined
}

export type CurrentUser = {
    firstName: string,
    lastName: string,
    companyName: string,
    phone: number | undefined
}

export type ReduxState = {
    user: object
}

export type Actions = {
    setUser: string,
    resetUser:string
}

export type setUser = {
    type: Actions['setUser']
    user: setCurrentUser
}

export type resetUser = {
    type: Actions['resetUser']
}