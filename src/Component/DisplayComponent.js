function DisplayComponent(props){
    const {ms,s,m,hr} = props.time;
    return(
        <div className="big_container">
            <div className="containers">
               <h1>{hr}h</h1>
            </div>
            <div className="containers">
               <h1>{m}m</h1>
            </div>
            <div className="containers">
               <h1>{s}s</h1>
            </div>
            <div className="containers">
               <h1>{ms}</h1>
            </div>
        </div>
    )
}
export default DisplayComponent;