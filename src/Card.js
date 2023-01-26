const Card = ({resume}) => {
    console.log(resume);
    const {name,phonenumber,email,site} = resume;
    return ( 
    <>    
        <div className="photo">
            
        </div>
        <h2>{name}</h2>
        <span className="phoneNumber"><p>{phonenumber}</p></span>
        <span className="email"><p>{email}</p></span>
        <span className="site"><p>{site}</p></span>
    </>
    )
}

export default Card;