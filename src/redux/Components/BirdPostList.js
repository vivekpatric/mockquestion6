import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import {giveLike} from '../action/birdAction';

const BirdPostList =()=>{

    const birdPosts=useSelector((state)=>state.birdPosts);
    const dispatch=useDispatch();


    return(
        <div>
            <h2>Bird Posts</h2>
            <ul>
                {birdPosts.map((post)=>(
                    <li key={post.id}>
                        <p>{post.text}</p>
                        <p>Likes: {post.likes}</p>
                        <button onClick={()=>dispatch(giveLike(post.id))}>Like</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BirdPostList;