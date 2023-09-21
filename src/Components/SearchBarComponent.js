import React from "react";
import { Component } from "react";
import '../styles/search.css'
class SearchBar extends Component{
    state={
        dropdown: false
    }
    toggleDropdown(toggle){
        this.setState({
            dropdown: toggle
        })
    }
    componentDidMount(){
        this.props.search("")
        this.setState({
            dropdown: false
        })
    }
    render(){
        const {search,data,result} = this.props
        const dates = new Set(data.map((item) => item.date))
        return(
        <header id="app-header">
            <div className="search-header">
                <button className="search-bar" onClick={() => this.toggleDropdown(!this.state.dropdown)}
                >{this.state.dropdown === false ? "Search Posts by Date" : "Click to Close Menu"}</button>
                {this.state.dropdown === true &&
                <div className="search-dropdown-menu">
                    {result !== "" && <button className="search-dropdown-item" onClick={() => {
                                search("")
                                this.toggleDropdown(false)
                    }}><p>- Clear Search -</p></button>}
                    
                    {[...dates].map((date) => {
                        return(
                            <button className="search-dropdown-item" onClick={() => {
                                search(date)
                                this.toggleDropdown(false)
                            }}><p>{date}</p></button>
                        )
                    })}
                </div>
                }
            </div>
      </header>
        )
    }
}
export default SearchBar