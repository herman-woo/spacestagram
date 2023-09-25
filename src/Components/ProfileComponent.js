import React from "react";
import { Component } from 'react'
import '../styles/profile.css'
import * as ux from '../utils/uxFunctions'
import Grid from './GridComponent'
import LoadButton from "./LoadButtonComponent";

class Profile extends Component {
    state = {
        imgs: [],
        user: {}
    }
    componentDidMount() {
        ux.startLoading("profile-posts");
        ux.top("top")
        ux.finishedLoading()
    }
    render() {
        const user = this.props.user
        const posts = this.props.posts
        let loadMore = this.props.loadMore
        // const postlink = `/user/${user.username}/`
        return (
            <div className="profile-body">
                <div id="top">
                </div>
                <div className="profile-header">
                    <div className="profile-picture" style={{ backgroundImage: `url(${user.displayPic})` }}></div>
                    <div className="profile-info">
                        <h1>{user.username}</h1>
                        <h2>{user.description}</h2>
                    </div>
                </div>
                <h3 className="profile-posts-title" id="profile-posts">Posts</h3>
                <Grid data={posts} />
                {posts.length > 0 &&
                    <LoadButton loadMore={loadMore}/>
                }
            </div>
        )
    }
}
export default Profile