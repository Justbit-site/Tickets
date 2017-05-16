import React, {Component} from 'react';
import reqwest from 'reqwest';
import { Post } from './posts/post';
import { Posts } from './posts/posts';
import { PostForm } from './posts/post_form';

export default class PostMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount(){
    this.getPosts();
  }

  getPosts(){
    reqwest({
      url: '/posts.json',
      method: 'GET'
    }).then(posts => {
      this.setState({
        posts: posts
      });
    });
  }

  render(){
    return(
      <div className="container">
        <PostForm></PostForm>
        <Posts posts={ this.state.posts }>
        </Posts>
      </div>
    );
  }
}
