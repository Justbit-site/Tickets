// React
import React, {Component} from 'react';
// Webpacker
import WebpackerReact  from 'webpacker-react';
// components
import { Login } from '../components/registration/login';
import { SignUp } from '../components/registration/signup';
// Material-ui Outbuildings
import injectTapEventPlugin from 'react-tap-event-plugin';

class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      showLogin: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e){
    e.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  render(){
    return (
      <div>
        {this.state.showLogin ? <Login toggle={this.toggle}/> : <SignUp toggle={this.toggle}/>}
      </div>);
  }
}

injectTapEventPlugin();
WebpackerReact.setup({Registration});
