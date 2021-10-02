class AuthService
{
    constructor()
    {
        this.localStorKey = 'userDetails';  
    }

    logIn(username,password,cb)
    {
       localStorage.setItem(this.localStorKey,JSON.stringify({username,password}));
       cb();
    }

    logOut()
    {
        localStorage.removeItem(this.localStorKey);
    }
}

export default new AuthService()