import React , { createContext, useState } from "react" ;
import Cookies from "universal-cookie";

export let auth = createContext() ; 
export default function Context({children}) {
    let cookie = new Cookies() ; 
    let [value , setValue] = useState(cookie.get('email'))
    return <auth.Provider value={{value , setValue}}>{children}</auth.Provider>
}