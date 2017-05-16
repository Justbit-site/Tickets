// React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Webpacker
import WebpackerReact  from 'webpacker-react';
// Reqwest
import reqwest from 'reqwest';
// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Material-ui Outbuildings
import injectTapEventPlugin from 'react-tap-event-plugin';
// Config
import { muiTheme } from '../config/material';
// Partials
import Navigation from '../partials/navigation';
// Components
import PostMain from '../components/post_main';

class Application extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Navigation />
        </MuiThemeProvider>
        <PostMain />
      </div>
    );
  }
}

injectTapEventPlugin();
WebpackerReact.setup({Application});
