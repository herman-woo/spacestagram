import {Component} from "react";
import { Link } from "react-router-dom";
import '../styles/post.css'
import * as ux from '../utils/uxFunctions'
class Post extends Component{
    state = {
        post: this.props.data,
        more: false
    }
    render(){
        const { data,like,addLike,unLike } = this.props
        const profileLink = `/user/${data.user}/`
        return(
            <div className="post">
                <div className="post-header">
                    <Link to={profileLink} className="post-user"><h3 >{data.user}</h3></Link>
                    <h5 className="post-date">{data.date}</h5>                    
                </div>
                <section >
                        {data.type === "video" ? 
                        <iframe className="post-image"  src={data.url}>{}</iframe>:
                        <Link className="post-view-more" to={profileLink+data.id}><div className="post-image" style={{backgroundImage: `url(${data.url})`}}></div></Link>
                        }

                </section>
                <section className="post-footer">
                    <div className="like-holder">
                        <h4>{data.title}</h4>
                        {like.length === 1 ? <button className="liked-button heart-button" onClick={() => unLike(data.id)}></button>: <button className="unliked-button heart-button" onClick={() => addLike(data.id)}></button>}
                    </div>
                    <span className="post-description">
                        {this.state.more === false ? <p>{data.desc.slice(0,250)}{data.desc.length > 250 && <a onClick={() => this.setState({more: true})} className="post-view-more">...more</a>}</p> : ux.formattedText(data.desc)}
                    </span>
                    <Link className="post-view-more" to={profileLink+data.id}><p>View Post</p></Link>
                </section>
            </div>            
        )
    }
}
export default Post