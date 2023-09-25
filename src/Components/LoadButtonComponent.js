import React from "react";
import { Component } from "react";
import '../styles/loading.css'
class LoadButton extends Component {
    render() {
        const { loadMore } = this.props
        return (
            <button className="loading" onClick={loadMore}></button>
        )
    }
}
export default LoadButton