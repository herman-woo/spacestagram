import {Component} from "react";
import { getToday, getYesterday } from "../utils/Date";
import Post from "./PostComponent";

class Home extends Component{
    render(){
        const today = []
        const yesterday = []
        const earlier = []
        const data = this.props.data
        const likes = this.props.likes
        data.map((item) => {
            if(item.date === getToday()){
                today.push(item)
            }
            else if (item.date === getYesterday()){
                yesterday.push(item)
            }
            else{
                earlier.push(item)
            }
        })
        return(
            <div className="home-body">
                {today.length > 0 && <h5 className="home-subtitle">Today's Posts</h5>}
                {today.slice(0,5).map((post) => {
                    const liked = likes.filter((like) => like===post.id)
                    return (
                        <Post 
                            data = {post}
                            like = {liked}
                            addLike = {this.props.addLike}
                            unLike = {this.props.unLike}
                        />
                    )
                })}
                {yesterday.length > 0 && <h5 className="home-subtitle">Yesterday's Posts</h5>}
                {yesterday.slice(0,5).map((post) => {
                    const liked = likes.filter((like) => like===post.id)
                    return (
                        <Post 
                            data = {post}
                            like = {liked}
                            addLike = {this.props.addLike}
                            unLike = {this.props.unLike}
                        />
                    )
                })}
                {earlier.length > 0 && <h5 className="home-subtitle">Earlier Posts</h5>}
                {earlier.slice(0,15).map((post) => {
                    const liked = likes.filter((like) => like===post.id)                 
                    return (
                        <Post 
                            data = {post}
                            like = {liked}
                            addLike = {this.props.addLike}
                            unLike = {this.props.unLike}
                        />
                    )
                })}
          </div>
        )
    }
}

export default Home