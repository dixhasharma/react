function Event() {
    const check = (props) => {
        // alert("hello");
    if(props>=100)
    {
         alert("adult")
    }
    else{
        alert("teeenage")
    }
    }
    return (
        <div>
            {/* <button onClick={check}>Click me</button> */}
            <button onClick={()=>check(19)}>Click me</button>
        </div>
    )
}
export default Event;
