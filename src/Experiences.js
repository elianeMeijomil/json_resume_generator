import Stacks from "./Stacks";

function Experiences ({experiences}){
    //console.log(experiences[0])
    return (
        <>
        {
            (experiences.map((xp,key)=>
                <div className='xp'>
                    <h2>{xp.company_name}</h2>
                    <div className="details">
                        <span className="period">{xp.entry_date.substr(4)}</span>
                        <span className="stacks"><Stacks stacks={xp.stacks}/></span>
                    </div>
                    <div className="jobDescription"><b>Atividades:</b> {xp.job_description}</div>
                </div>
            ))
        }
        </>
    );

}

export default Experiences;