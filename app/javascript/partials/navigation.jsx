// React
import React, {Component} from 'react';
// material-ui
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
// components
import Options from './navigation/options';
import DrawerMenu from './navigation/drawer';

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={{cursor: 'pointer'}}>Justbit tickets</span>}
          showMenuIconButton={true}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={<Options />}
        />
      <DrawerMenu
        open={this.state.open}
        onChange={this.handleToggle} />
      </div>
    );
  }
}
