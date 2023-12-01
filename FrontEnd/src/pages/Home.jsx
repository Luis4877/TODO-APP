import React from "react";

function Home(){
    
    return(
        <div>
            <h1>{import.meta.env.VITE_HOME}</h1>
        </div>
    )
}

export default Home;