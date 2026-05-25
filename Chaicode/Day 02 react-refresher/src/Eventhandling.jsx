import React from "react";


function EventHandling(){

    const eveclick = (event)=> {
        console.log(event)
    }

return(
    <>
    <button onClick={eveclick}>Event Handling</button>
    </>
)
}

export default EventHandling;