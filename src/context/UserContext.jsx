/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

 const UserContext = createContext()

const UserProvider = ({children})=> {
    // eslint-disable-next-line no-unused-vars
    const [currentUser,setCurrentUser] = useState(null)
    return(
        <UserContext.Provider value={currentUser}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider

export const useUser = ()=> useContext(UserContext)