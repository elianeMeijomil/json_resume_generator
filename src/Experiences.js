import Stacks from "./Stacks";

function Experiences ({experiences}){
    console.log(experiences[0])
    return (
        <>
        {
            (experiences.map((xp,key)=>
                <div className='xp box'>
                    <h2>{xp.company_name}</h2>
                    <span className="period">{xp.entry_date}-{xp.quit_date}</span>
                    <span className="stacks"><Stacks stacks={xp.stacks}/></span>
                    <div className="jobDescription box">{xp.job_description}</div>
                </div>
            ))
        }
        </>
    );

}

export default Experiences;