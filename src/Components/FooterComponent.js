import { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="footer-dashboard">
                    <Link to="/" className="footer-icon home"></Link>
                    <Link to="/search" className="footer-icon search"></Link>
                    <Link to="/liked" className="footer-icon liked"></Link>
                </div>
          </footer>
        )
    }
}

export default Footer