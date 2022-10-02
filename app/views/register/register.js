let page;

export const loadRegister = (args) => {
    page = args.object
}

export const signUp = () => {
    console.log("@SIGN UP");
    page.frame.navigate("views/login/login")    
}