import React from "react";

function Home(){
    
    return(
        <div>
            <h>{import.meta.env.VITE_HOME}</h>
        </div>
    )
}

export default Home;