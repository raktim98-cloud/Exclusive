/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6}$/;
  const nameRegex = /^[a-zA-Z]{4,20}$/;


  function addUser(name,email,password) {
    if (nameRegex.test(name)) {
      if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
          alert("Successfully Login");
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user);
              
              // ...
            })
            .catch((error) => {
              // const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              
              // ..
            });
        } else {
          alert("password invelid");
        }
      } else {
        alert("email invelid");
      }
    } else {
      alert("invalid Name");
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

// function addUser (name,email,password) {
//   return(
//     !nameRegex.test(name) ? "invalid Name" : !emailRegex.test(email) ? "email invelid" : !passwordRegex.test(password) ? "password invelid" : "Successfully Login"
//   )
// }

// function addUser() {
//   const message = !nameRegex.test(name)
//     ? "Invalid name"
//     : !emailRegex.test(email)
//     ? "Invalid email"
//     : !passwordRegex.test(password)
//     ? "Invalid password"
//     : "Successfully logged in";

//   alert(message);
// }
