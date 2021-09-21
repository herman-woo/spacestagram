import { Component } from "react";
import { getDay } from "../utils/Date";
import { getUserData } from "../utils/UserAPI";
import '../styles/header.css'
class Header extends Component{
    state = {
        date: getDay(),
        username:"",
        picture: ""
    }
    componentDidMount(){
        const user = getUserData("Herman Woo")
        this.setState({
            username: user.username,
            picture: user.displayPic
        })
    }
    render(){
      const {date,username,picture} = this.state
        return(
            <header id="app-header">
                <div className="app-logo header-item">
                    <h1>Spacestagram</h1>
                    <h5>Image-sharing from the Final Frontier</h5>
                </div>
                        <div className="app-date header-item">
                            <h2>{date}</h2>
                        </div>
                <a href="https://herman-woo.github.io/" className="app-user header-item header-link">
                    <div className="app-user-image" style={{backgroundImage: `url(${picture})`}}></div>
                    <h3 className="app-user-name">{username}</h3>
                </a>
          </header>
        )
    }
}
export default Header