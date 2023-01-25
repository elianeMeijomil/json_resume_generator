const Card = ({resume}) => {
    console.log(resume);
    const {name,email,site} = resume;
    return ( 
    <>    
        <div className="photo">
            
        </div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{site}</p>
    </>
    )
}

export default Card;