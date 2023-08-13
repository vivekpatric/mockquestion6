import React from "react";
import BirdPostForm from "./redux/Components/BirdPostForm";
import BirdPostList from "./redux/Components/BirdPostList";


const App=()=>{

    return(
        <div className="App">
            <h1>Bird Social Network</h1>
            <BirdPostForm />
            <BirdPostList />
        </div>
    );
}

export default App;