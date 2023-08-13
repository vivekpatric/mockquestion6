import { ADD_BIRD_POST,GIVE_LIKE } from "./actionType";
export const addBirdPost =(post)=>{
    return {
        type:'ADD_BIRD_POST',
        payload: post,
    };
};

export const giveLike=(postId)=>{

    return{
        type:'GIVE_LIKE',
        payload:postId,
    };
};