import { useState } from "react";
import Button from "../Components/Button";
import Input from "../Components/Input";
import { useUser } from "../context/UserContext";

function Signup() {
  const {currentUser,addUser} = useUser();
  
  
  const [newUser,setNewUser] = useState({
    name:"",
    email:"",
    password:""
  })
  const handelSignUp = (e)=> {
    e.preventDefault()
    addUser(newUser.name,newUser.email,newUser.password)
    console.log(currentUser);
    
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
          <Input onChange={(e)=> setNewUser({...newUser, [e.target.name]: e.target.value})} value={newUser.name} type="text" placeholder="Name" name="name" />
          <Input onChange={(e)=> setNewUser({...newUser, [e.target.name]: e.target.value})} value={newUser.email} type="email" placeholder="Email or Phone Number" name="email" />
          <Input onChange={(e)=> setNewUser({...newUser, [e.target.name]: e.target.value})} value={newUser.password} type="password" placeholder="Password" name="password" />
          <Button onClick={handelSignUp} type="submit" TagName={"button"} className={`text-white`}>Create Account</Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
