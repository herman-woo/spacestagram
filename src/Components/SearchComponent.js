import React from "react";
import { Component } from "react";
import '../styles/search.css'
import Grid from "./GridComponent";
class Search extends Component{
    render(){
        const data = this.props.data
        const search = this.props.search
        const results = data.filter((item) => item.date === search)
        return(
            <div className="search-body" >
                {search === "" ? 
                <h3>Search</h3> : 
                    results.length === 1 ?
                    <h3>{results.length} Result for {search}:</h3> :
                    <h3>{results.length} Results for {search}:</h3>
                }
                {search === "" ? 
                <Grid data={data}/> :
                <Grid data={results}/>
                }
            </div>
        )
    }
}
export default Search