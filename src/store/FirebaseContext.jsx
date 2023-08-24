import { createContext, useState } from "react";


export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null)


 export default  function Context ({children}){
    const [user,setUser] = useState(null)


    return(
       <AuthContext.Provider value={{user,setUser}}>
        {children}  {/* here the children means App from the index.js which is included inside Context */}
       </AuthContext.Provider>
    )
}