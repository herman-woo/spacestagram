import { Component } from "react";
import { Link } from "react-router-dom";
class Grid extends Component{
    render(){
        const data = this.props.data
        const postlink = `/user/`
        return(
            <div className="profile-posts" >
                {data.map((item) => {
                    return <Link className="profile-post-top" to={postlink+item.user+'/'+item.id}>
                    {item.type === "video" ? 
                    <div><div className="profile-post-item link-overlay" ></div><iframe className="profile-post-item" src={item.url}></iframe></div>:
                    <div className="profile-post-item" style={{backgroundImage: `url(${item.url})`}}></div>
                    }
                </Link>
                })}
              </div>         
        )
    }
}

export default Grid