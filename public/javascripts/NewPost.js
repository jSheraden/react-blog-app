import React, { Component } from 'react';

class NewPost extends Component {
  constructor() {
    super();
    this.title = '';
    this.body = '';
  }

  submitNewPost() {

  }
  
  render() {
    return (
      <div className="NewPost">
        <p className="NewPost-intro"><h1>New Post</h1></p>
        <form onSubmit={this.submitNewPost}>
          <p><input id="title" type="text" placeholder="Title"/></p>
          <p><textarea id="body" placeholder="Enter text"></textarea></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      </div>
    );
  }
}

export default NewPost;
