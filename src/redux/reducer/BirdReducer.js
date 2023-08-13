import { ADD_BIRD_POST } from "../action/actionType";

const initialState={

    birdPosts:[],
    postIdCounter:1
};

export const BirdReducer=(state=initialState,action)=>{

    switch (action.type){
        case 'ADD_BIRD_POST':
            const newPost={...action.payload,id:state.postIdCounter};
            return{
                ...state,
                birdPosts: [...state.birdPosts,newPost],
                postIdCounter:state.postIdCounter+1
            };

        case 'GIVE_LIKE':
            return {
                ...state,
                birdPosts:state.birdPosts.map((post)=>
                post.id=== action.payload
                ? {...post,likes:post.likes+1}
                :post
                ),
            };
            default:
                return state;    
    }

};