import { Observable } from '@nativescript/core'

let page;

export const loadRegister = (args) => {
    page = args.object
}

export const signUp = () => {
    page.frame.navigate("views/login/login")    
}