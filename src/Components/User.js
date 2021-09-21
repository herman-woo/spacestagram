import React from "react";
import Profile from "./ProfileComponent";
import { useParams } from "react-router";
import { getUserData } from "../utils/UserAPI";
export function User(props){
    let { id } = useParams()
    let {data} = props
    const posts = data.filter((item) => item.user === id)
    const userData = getUserData(id)
    return <Profile key={userData.username} user={userData} posts={posts}/>
}