import React from "react";
import { Component } from 'react';
import { Switch,Route } from 'react-router';
import './styles/App.css';
import './styles/footer.css'
import './imgs/default.jpg';
import { startLoading,finishedLoading } from './utils/uxFunctions';
import * as NasaAPI from './utils/NasaAPI'
import Home from './Components/HomeComponent';
import Header from './Components/HeaderComponent';
import Search from './Components/SearchComponent'
import { PostLoader } from './Components/PostLoaderComponent';
import Footer from './Components/FooterComponent';
import { User } from './Components/User';
import LikedPosts from './Components/LikedPostsComponent';
import SearchBar from './Components/SearchBarComponent';

class App extends Component{
  state = {
    data: [],
    likes: [],
    search: '',
    loadMore: 0
  }
  async getData(){
    const res = await NasaAPI.getAllPosts()
    this.setState({
      data: res
    })
    finishedLoading()
  }

  updateSearch = (query) => {
    this.setState({
      search: query
    })
  }
  addLike = async (newItem) => {
    const update = this.state.likes.concat([newItem])
    this.setState({
      likes: update
    })
    this.updateLocal(update)
  }
  unLike = (removeItem) => {
    const update = this.state.likes.filter((item) => item !== removeItem)
    this.setState({
      likes: update
    })
    this.updateLocal(update)
  }

  loadMorePosts = async () => {
    console.log("loading more posts"+this.state.loadMore)
    const res = await NasaAPI.addApod(this.state.loadMore)
    const update = this.state.data.concat(res)
    const loadUpate = this.state.loadMore + 2
    this.setState({
      data: update
    })
    this.setState({
      loadMore: loadUpate
    })
  }
  updateLocal = (data) => {
    localStorage.setItem('likes',data)
  }
  retrieveLocal(){
    const data = localStorage.getItem('likes')
    if(data){
      const oldData = data.split(",")
      this.setState({
        likes: oldData
      })
    }
  }
  componentDidMount(){
    this.retrieveLocal()
    this.getData()
    startLoading("main")
  }

  render(){
    return(
      <div className="app" id="app">
        <Switch>
          <Route exact path='/search' render={() =>
                <SearchBar data={this.state.data} result={this.state.search} search={this.updateSearch}/>
              }/>
          <Route path='/' render={() =>
                <Header />
              }/>
        </Switch>
        <main id="main">
          <Switch>
            <Route exact path='/' render={() =>
              <Home data={this.state.data} likes={this.state.likes} addLike={this.addLike} unLike={this.unLike} loadMorePosts={this.loadMorePosts}/>
            }/>
            <Route exact path='/search' render={() =>
              <Search data={this.state.data} search={this.state.search}/>
            }/>
            <Route exact path='/liked' render={() =>
              <div>
                <h5 className="liked-header">Liked Posts:</h5>
                <LikedPosts data={this.state.data} likes={this.state.likes}/>
              </div>
            }/>
            <Route exact path='/user/:id' render={() =>
              <User data={this.state.data}/>
            }/>
            <Route exact path='/user/:id/:postid' render={() =>
              <PostLoader data={this.state.data} likes={this.state.likes} addLike={this.addLike} unLike={this.unLike}/>
            }/>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}
export default App;
