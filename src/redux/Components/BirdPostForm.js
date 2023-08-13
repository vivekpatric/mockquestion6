import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import { addBirdPost } from "../action/birdAction";

const BirdPostForm =() =>{

    const dispatch =useDispatch();
    const [birdPost ,setBirdPost]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addBirdPost({text:birdPost,likes:0}));
        setBirdPost('');
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Write a bird post"
                  value={birdPost}
                  onChange={(e)=>setBirdPost(e.target.value)}
                  />
                  <button type="submit">ADD POST</button>
            </form>
        </div>
    );
};

export default BirdPostForm;