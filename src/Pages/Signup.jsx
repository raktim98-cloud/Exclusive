import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useUser } from "../context/UserContext";
import OutlineButton from "../Components/OutlineButton";
import { Link } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";

function Signup() {
  const { currentUser, addUser, googleSignUp, facebookSignUp } = useUser();

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelSignUp = (e) => {
    e.preventDefault();
    addUser(newUser.name, newUser.email, newUser.password);
    console.log(currentUser);
  };
  const handelChange = (e) => {
    console.log(newUser.name);
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handelGoogle = (e) => {
    e.preventDefault();
    googleSignUp();
  };
  const handelFacebook = (e) => {
    e.preventDefault();
    facebookSignUp();
  };

  return (
    <section>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="grid grid-cols-[4fr_3fr] py-15 ">
        <div className="max-w-[805px] max-h-[780px] mx-auto">
          <img
            className="w-full  object-cover"
            src="/Singup_image.jpg"
            alt="image"
          />
        </div>
        <form className="py-[125px] text-start pl-15 grid grid-cols-1 pr-25">
          <h3 className="text-[36px] leading-[30px] tracking-[4%] text-black pb-6">
            Create an account
          </h3>
          <p className="text-[16px] leading-[24px] text-black">
            Enter your details below
          </p>
          <Input
            onChange={(e) => handelChange(e)}
            value={newUser.name}
            type="text"
            placeholder="Name"
            name="name"
          />
          <Input
            onChange={(e) => handelChange(e)}
            value={newUser.email}
            type="email"
            placeholder="Email or Phone Number"
            name="email"
          />
          <Input
            onChange={(e) => handelChange(e)}
            value={newUser.password}
            type="text"
            placeholder="Password"
            name="password"
          />
          <Button
            onClick={handelSignUp}
            type="submit"
            TagName={"button"}
            className={`text-white px-25 py-4`}
          >
            Create Account
          </Button>
          <OutlineButton
            onClick={handelGoogle}
            type="submit"
            TagName={"button"}
          >
            <img src="/google_icon.png" alt="google_icon" />
            Sign up with Google
          </OutlineButton>
          <button
            onClick={handelFacebook}
            type="submit"
            className="flex items-center justify-center w-full gap-3 px-6 py-3 my-2 font-medium text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
            Sign up with Facebook
          </button>
          <div className="flex items-center justify-center gap-1.5 py-3">
            <h5>Already have account?</h5>
            <Link className="underline" to="/login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
