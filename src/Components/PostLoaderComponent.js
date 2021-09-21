import React from "react";
import PostPage from "./PostPageComponent";
import { useParams } from "react-router";
export function PostLoader(props){
    let {data,likes,addLike,unLike} = props
    let {id,postid} = useParams()
    const post = data.filter((item) => item.id === postid)
    const liked = likes.includes(postid)
    return <PostPage user={id} post={post} liked={liked} addLike={addLike} unLike={unLike}/>
}