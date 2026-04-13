import React from "react";
const IfElsecomp = () => {
   const agent=false;
    return (
        <>
        <div>
            {agent ? <p>The agent is available</p> : <p>The agent is not available</p>}
        </div>
        </>
    );
}
export default IfElsecomp;