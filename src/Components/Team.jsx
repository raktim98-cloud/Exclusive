import Member1 from "../assets/Image/member (1).png"
import Member2 from "../assets/Image/member (2).png"
import Member3 from "../assets/Image/member (3).png"

const teamData = [{
    id:1,
    image:Member1,
    title:"Tom Cruise",
    dis:"Founder & Chairman"
}]

function Team() {
  return (
    <div>
        
    </div>
  )
}

export default Team

const TeamList = ()=> {
    return(
            <div>
                <div className="w-[370px] h-[430px]">
                <img className="w-full h-full object-cover" src={Member1} alt="member" />
            </div>
            <div>
                <h3>Tom Cruise</h3>
                <p>Founder & Chairman


                    
                </p>
            </div>
        </div>
    )
}