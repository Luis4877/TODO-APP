import React from "react";

function Home(){
    const text = process.env.HOME;
    console.log(text)
    return(
        <div>
            <h>{text}</h>
        </div>
    )
}

export default Home;