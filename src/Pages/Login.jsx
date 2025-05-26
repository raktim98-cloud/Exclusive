import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useUser } from "../context/UserContext";
import { Link } from "react-router";

function Login() {
  const {currentUser,addUser} = useUser();
  
  
  const [newUser,setNewUser] = useState({
    email:"",
    password:""
  })
  const handelSignUp = (e)=> {
    e.preventDefault()
    addUser(newUser.email,newUser.password)
    console.log(currentUser);
    
  }
 
  const handleChangeUp = (e) => {
    console.log(newUser.name);
    setNewUser({...newUser, [e.target.name] : e.target.value})
  }
  


  return (
    <section>
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
          
          <Input onChange={(e)=> handleChangeUp(e)} value={setNewUser.email} type="email" placeholder="Email or Phone Number" name="email" />
          <Input onChange={(e)=> handleChangeUp(e)} value={setNewUser.password} type="password" placeholder="Password" name="password" />
          <div className="flex justify-center items-center gap-[87px]">
            <Button onClick={handelSignUp} type="submit" TagName={"button"} className={`text-white px-[48px] py-[16px]`}>Log In</Button>
            <Link>Forget Password</Link>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default Login;
