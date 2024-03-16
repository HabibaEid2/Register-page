import React , { createContext, useState } from "react" ;
import Cookies from "universal-cookie";

export let token = createContext(null) ; 
export default function Context({children}) {
    let cookie = new Cookies() ; 
    let [value , setValue] = useState(cookie.get("token")) ; 
    return <token.Provider value={{value , setValue}}>{children}</token.Provider>
}