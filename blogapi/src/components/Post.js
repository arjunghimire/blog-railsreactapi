import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';

class Post extends Component {
  constructor(props){
   	super(props);
   	this.state = {
   		posts: []
  	}
  }
  
  componentDidMount(){
  	axios.get('http://127.0.0.1:3001/api/v1/posts.json')
	  .then(response => {
	    console.log(response);
	    this.setState({posts: response.data})
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
  }

  render() {
    return (
      <div className="card-header">
         {this.state.posts.map((post) => {
         	return(
         	<div className="tile" key={post.id}>
         		<h1>{post.title} </h1>
         		<p> {post.body}</p>
         	</div>
         	)
         })}
	  </div>
    );
  }
}

export default Post;
