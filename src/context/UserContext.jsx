/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const nameRegex = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/;

  // const TostyfyPass = () => toast.error("Not Easy Guys! Invalid Pass")
  // const TostyfyName = () => toast.error("Name Is Totally Unavailable!")
  // const TostyfyEmail = () => toast.error("Try To Another Email!")

  const Tostyfy = (type, message) => {
    type === "success" && toast.success(message);
    type === "error" && toast.error(message);
    type === "warn" && toast.warn(message);
  };

  function addUser(name, email, password) {
    if (nameRegex.test(name)) {
      if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user);

              Tostyfy("success", "SuccessFully Login");

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              if (errorCode.includes("email-already-in-use")) {
                Tostyfy("error", "Ops! Email is alredy in used");
              }

              // ..
            });
        } else {
          Tostyfy("error", "Not Easy Guys! Invalid Pass");
        }
      } else {
        Tostyfy("warn", "Try To Another Email!");
      }
    } else {
      Tostyfy("warn", "Name Is Totally Unavailable!");
    }
  }
  const provider = new GoogleAuthProvider();

  function googleSignUp() {
    console.log("google");

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const facebookProvider = new FacebookAuthProvider();

  function facebookSignUp() {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);

        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  }

  //   function googleSignUp(e) {
  //   e.preventDefault(); // Prevent form submission
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // Handle success
  //     }).catch((error) => {
  //       // Handle errors
  //     });
  // }

  return (
    <UserContext.Provider
      value={{ currentUser, addUser, googleSignUp, facebookSignUp }}
    >
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
