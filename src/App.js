import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Feed from './feed.js'
const allPosts = require('./blog_posts.json');

class App extends Component {
    constructor(){
    super()
          this.state = {
            allPosts
          }
}
  render() {

    return (
      <div className="App">
        {/* <feedInfo /> */}
        <Feed allPosts = {this.state.allPosts} />
      </div>
    );
  }
}

export default App;
