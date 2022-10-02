import { Observable } from '@nativescript/core'

let page;

export const loadRegister = (args) => {
    page = args.object
}

export const signUp = () => {
    console.log("@SIGN UP");
// const newUser = new Observable()
//     const email = page.getViewById("email")
//     newUser.set("email", email)
//     console.log("NEW", newUser);
    
    page.frame.navigate("views/login/login")    
}