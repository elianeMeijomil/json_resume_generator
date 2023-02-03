import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { CiLocationOn, CiMail, CiLink, CiPhone } from "react-icons/ci";
import { IconContext } from "react-icons";

const Card = ({resume}) => {
    console.log(resume); 
    const {name,phonenumber,email,location,site,photodecription,position} = resume;
    const {twitter,linkedin,github} = resume.socials;
    const bt_linkedin = (linkedin!==undefined&&linkedin!=='')?(
      <IconContext.Provider value={{ size: "2rem" }}>
        <span className="socials linkedin"><a href={linkedin}><FaLinkedin /></a></span>
      </IconContext.Provider>
      ):'';
      const bt_github = (github!==undefined&&github!=='')?(
          <IconContext.Provider value={{ size: "2rem" }}>
          <span className="socials github"><a href={github}><FaGithub /></a></span>
        </IconContext.Provider>
    ):'';
    const bt_twitter = (twitter!==undefined&&twitter!=='')?(
        <IconContext.Provider value={{ size: "2rem" }}>
          <span className="socials twitter"><a href={twitter}><FaTwitter /></a></span>
        </IconContext.Provider>
    ):'';

    return ( 
    <div className="contactCard">    
        <div className="photo">
            <img src="./photo.jpg" alt= {name + "'s " + photodecription} />
        </div>
        <h2>{name}</h2>
        <p>{position}</p>
        <hr />
        <div className="contact">
        <IconContext.Provider value={{ size: "1.2rem" }}>
            <span className="location"><CiLocationOn /><p>{location}</p></span>
            <span className="phoneNumber"><CiPhone /><p>{phonenumber}</p></span>
            <span className="email"><CiMail /><p>{email}</p></span>
            <span className="site"><CiLink /><p><a href={site}>{site}</a></p></span>
        </IconContext.Provider>
        </div>
        <hr />
        {bt_linkedin}
        {bt_github}
        {bt_twitter}
    </div>
    )
}

export default Card;