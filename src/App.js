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
import * as DateUtil from './utils/Date'

class App extends Component{
  state = {
    data: [],
    likes: [],
    search: '',
    earliestDate: 0
  }
  
  //HOME PAGE
  //For the start of the app to get posts
  //rollbackdate stamps the earlier date on the the timeline, and further requests will update it as reference
  async getData(){
    //could potentially make dateRange and input varaible
    const dateRange = 9
    const rollback = dateRange - 1
    const startingDate = DateUtil.getRollbackDate(rollback,DateUtil.getToday())
    const res = await NasaAPI.getAllPostsFrom(startingDate)
    this.setState({
      data: res,
      earliestDate: startingDate
    })
    finishedLoading()
    localStorage.setItem('posts',res)
  }
  loadMorePosts = async () => {
    const loadMore = 9
    const endDate = DateUtil.getRollbackDate(1,this.state.earliestDate)
    const startDate = DateUtil.getRollbackDate(loadMore-1,endDate)
    const res = await NasaAPI.getApod(startDate,endDate)
    const update = this.state.data.concat(res)
    console.log(startDate,endDate)
    this.setState({
      data: update,
      earliestDate: startDate
    })
    localStorage.setItem('posts',this.state.data)
  }
  
  //SEARCH PAGE
  updateSearch = (query) => {
    this.setState({
      search: query
    })
  }

  //POST COMPONENT
  addLike = async (newItem) => {
    const update = this.state.likes.concat([newItem])
    console.log(update)
    this.updateLikes(update)
  }
  unLike = (removeItem) => {
    const update = this.state.likes.filter((item) => item !== removeItem)
    this.updateLikes(update)
  }
  updateLikes = (update) => {
    this.setState({
      likes: update
    })
    localStorage.setItem('likes',update)
  }

  //Synchronous
  retrieveLikes(){
    const data = localStorage.getItem('likes')
    console.log("retrieve likes ",data)
    if(data){
      const oldData = data.split(",")
      this.setState({
        likes: oldData
      })
    }
  }
  retrievePosts(){
    const data = localStorage.getItem('posts')
    if(data){
      const oldData = data.split(",")
      this.setState({
        data: oldData
      })
    }
  }
  componentDidMount(){
    this.retrieveLikes()
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
              <User data={this.state.data} loadMore={this.loadMorePosts}/>
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
