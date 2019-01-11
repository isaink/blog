// import App from './App.js'
import React, { Component } from 'react';
import postEl from './post.js';

class Feed extends React.Component {
    constructor(props){ 
        super(props)
        // this.state = {}
    }
    render(){
        
        const { allPosts} = this.state;
        
        const listPost = allPosts.map(post => {
            return (
                <postEl
                title={allPosts.title}
                body={allPosts.body}
                />
            );
        });
        return (
            <React.Fragment>
                <div>{listPost}</div>
            </React.Fragment>
            );
        }
}

export default Feed;