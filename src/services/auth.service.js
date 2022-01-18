// class AuthService
// {
//     constructor()
//     {
//         this.localStorKey = 'userDetails';  
//     }

//     logIn(username,password,cb)
//     {
//        localStorage.setItem(this.localStorKey,JSON.stringify({username,password}));
//        cb();
//     }

//     logOut()
//     {
//         localStorage.removeItem(this.localStorKey);
//     }
// }

// export default new AuthService()

// TODO:this is not working

// import {useState} from 'react';

// function AuthService()
// {
//     const [currState,setCurrState] = useState("initial state");

//     function getDetails()
//     {
//         return currState;
//     }

//     function setDetails(value)
//     {
//         console.log(value)
//         setCurrState(value)
//     }
// }
// export default AuthService
var  state ='cuurrent statte';
const AuthService = {
  
    setState:()=>
    {
        console.log("state set from curr to set",state);
        state = 'set state'
    }
}
export default AuthService
