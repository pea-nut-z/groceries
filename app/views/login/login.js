let page;

export const loaded = (args) => {
    page = args.object
    console.log("@LOADED");
    
}

export const signIn = () => {
    console.log("@SING IN");
}

// export const signUp = () => {
    
// }

export const register = () => {
    console.log("@REGISTER");
    page.frame.navigate("views/register/register")
}