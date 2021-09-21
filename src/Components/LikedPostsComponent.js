import { Component } from "react";
import Grid from "./GridComponent";

class LikedPosts extends Component{
    render(){
        const liked = this.props.likes
        const data = this.props.data
        const posts = data.filter((item) => liked.includes(item.id))
        return(
            <div className="saved-body" >
               <Grid data={posts}/>
            </div>            
        )
    }
}

export default LikedPosts