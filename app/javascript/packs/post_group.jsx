import React from 'react';
import WebpackerReact  from 'webpacker-react';
import { Post } from '../components/posts/post';
import { Posts } from '../components/posts/posts';
import reqwest from 'reqwest';

export class PostGroup extends React.Component {
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
      <div>
        <Posts posts={ this.state.posts }>
        </Posts>
      </div>
    );
  }
}

WebpackerReact.setup({PostGroup});
