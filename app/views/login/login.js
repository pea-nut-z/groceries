let page, email, password;

export const loaded = (args) => {
    page = args.object
    console.log("@LOADED");
    
}

export const signIn = () => {
    console.log("@SIGN IN");
    page.frame.navigate("views/list/list")
    // email = page.getViewById("email")
    // password = page.getViewById("password")
    // console.log(email.text);
    // console.log(password.text);


    
}

export const register = () => {
    console.log("@REGISTER");
    page.frame.navigate("views/register/register")
}