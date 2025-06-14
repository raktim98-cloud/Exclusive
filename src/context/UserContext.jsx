/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut 
} from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);
  
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
{/* Sigup user*/}
  function addUser(name, email, password) {
    if (nameRegex.test(name)) {
      if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user);

              Tostyfy("success", "SuccessFully Creat A Account");

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
{/*Login user */}
function logInUser(email, password) {
      if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              console.log(user);

              Tostyfy("success", "SuccessFully Login");

              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              if (errorCode.includes("auth/invalid-credential")) {
                Tostyfy("error","invalid email & Password");
              }
            });
        } else {
          Tostyfy("error", "Not Easy Guys! Invalid Pass");
        }
      } else {
        Tostyfy("warn", "Try To Another Email!");
      }
  }
  

  {/* SIGN OUT USER */}
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log(uid);
    
//     // ...
//   } else {
//     console.log("User is signed out");
    
//   }
// });

function handleSignOut (){
signOut (auth).then(() => {
  Tostyfy("success" , " Sign Out SuccessFully")
}).catch((error) => {
   Tostyfy("error",error )
});
}

const provider = new GoogleAuthProvider();

 async function googleSignUp() {
    try {
        console.log("Attempting Google sign-in...");
        
        const result = await signInWithPopup(auth, provider);
        
        // 🔧 Safer credential handling
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
            throw new Error("No credential returned from Google");
        }
        
        const token = credential.accessToken;
        const user = result.user;
        
        console.log("Google sign-in successful:", user);
        
        // ✅ Essential: Handle the user in your app
        // Example:
        // 1. Store in state (if using React)
        // 2. Add to your database if new user
        // 3. Redirect or update UI
        
        return user; // Make the user available to the caller
        
    } catch (error) {
        console.error("Google sign-in failed:", error);
        
        // ✅ Better error handling
        if (error.code === 'auth/popup-closed-by-user') {
            console.warn("User closed the popup window");
        } else {
            // Show user-friendly message
            alert(`Sign-in failed: ${error.message}`);
        }
        
        // ✅ Return null or re-throw based on your needs
        return null;
    }
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
      value={{ currentUser, addUser, googleSignUp, facebookSignUp ,logInUser,handleSignOut}}
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
