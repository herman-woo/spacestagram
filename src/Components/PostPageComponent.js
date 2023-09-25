import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import * as ux from "../utils/uxFunctions"
import '../styles/page.css'
import LoadButton from "./LoadButtonComponent";
class PostPage extends Component{
    componentDidMount(){
        ux.top("page-topper")
    }
    render(){
        const { liked,addLike,unLike } = this.props
        const user = this.props.user
        const data = this.props.post
        return(
            <div className="page">
                <div id="page-topper"></div>
                {data.map((post) =>                
                (<div className="page-body">
                    {post.type === "video" ? <iframe className="post-image" src={post.url}>{}</iframe> : <a className="post-image-container" href={post.hdef} target="_blank"><img className="page-image" src={post.url}/></a>}    
                    <div className="page-info">
                        <div className="page-header">
                            <Link to={"/user/"+user} ><h3 className="page-text">{user}</h3></Link>
                            <h4 className="page-text date-small">{post.date}</h4>
                        </div>
                        <h2 className="page-text">{post.title}</h2>
                        <h4 className="page-text date-large">{post.date}</h4>
                        {liked===true?<button className="liked-button heart-button" onClick={() => unLike(post.id)}></button>: <button className="unliked-button heart-button" onClick={() => addLike(post.id)}></button>}
                        <div className="page-desc">{ux.formattedText(post.desc)}</div>                 
                    </div>            
                </div>))}
            </div> 
        )
    }
}

export default PostPage