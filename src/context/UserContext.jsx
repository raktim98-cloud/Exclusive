/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?]).{6}$/;

  const email = "rakti@mgmail.com"
  const password = "Ab!a6s"

  function addUser() {
    if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
            alert("Password matched")
        }else{
            alert("password invelid")
        }
        alert("Its matched")
    }else{
        alert("email invelid")
    }
  }

  return (
    <UserContext.Provider value={{ currentUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const useUser = () => useContext(UserContext);
