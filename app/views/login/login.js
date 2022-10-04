let page, email, password;

export const loaded = (args) => {
    page = args.object
}

export const signIn = () => {
    page.frame.navigate("views/list/list")
}

export const register = () => {
    page.frame.navigate("views/register/register")
}