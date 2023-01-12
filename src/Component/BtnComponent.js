import "../App.css";
const BtnComponent = ({start, stop, status, reset}) =>{
    return(
        <div className="buttons">
           {status === 1 ? <button onClick = {stop} className ="stop_button">Stop</button>:<button onClick = {start} className ="start_button">Start</button> }
           <button onClick = {reset} className ="stop_button">Reset</button>
        </div>
    )
}
export default BtnComponent;