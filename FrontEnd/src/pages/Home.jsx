import React from "react";

function Home(){
    const text = process.env.HOME;
    console.log(process.env)
    return(
        <div>
            <h>{text}</h>
        </div>
    )
}

export default Home;