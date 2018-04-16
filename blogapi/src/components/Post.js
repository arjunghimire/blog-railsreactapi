import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import TextTruncate from 'react-text-truncate'; 

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
      <div className="box">
         {this.state.posts.map((post) => {
         	return(
           <div className="card-box card">
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text"> 
              <TextTruncate
                  line={3}
                  truncateText="…"
                  text={post.body}
              />
              </p>
              <a href="#" >Read More</a> | 
              <a href="#" >Delete Me</a>
            </div>
          </div>
         	)
         })}
	  </div>
    );
  }
}

export default Post;
