import { FaPhone, FaGlobe, FaAddressCard } from "react-icons/fa";

const Card = ({resume}) => {
    console.log(resume);
    const {name,phonenumber,email,site,photodecription} = resume;
    return ( 
    <div className="contactCard">    
        <div className="photo">
            <img src="./photo.jpg" alt= {name + "'s " + photodecription} />
        </div>
        <h2>{name}</h2>
            
        <span className="phoneNumber"><FaPhone /><p>{phonenumber}</p></span>
        <span className="email"><FaAddressCard /><p>{email}</p></span>
        <span className="site"><FaGlobe /><p><a href={site}>{site}</a></p></span>
    </div>
    )
}

export default Card;