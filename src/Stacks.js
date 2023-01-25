function Stacks ({stacks}) {
    return (
        <>
        { stacks.map( (stack,key) => <span  className={'stack color'+(key%4)} key={key}>{ stack }</span>) }
        </>
    );

}

export default Stacks;