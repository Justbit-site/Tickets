// React
import React, {Component} from 'react';
// material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){
    this.setState({open: !this.state.open});
    this.props.onChange();
  }

  handleClose(){
    this.setState({open: false});
    this.props.onChange();
  }

  render() {
    return (
      <Drawer open={this.props.open}
        docked={false}
        onRequestChange={this.handleClose} >
        <MenuItem style={{textAlign: 'center'}} onTouchTap={this.handleClose}>Justbit tickets</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Inicio</MenuItem>
        <MenuItem onTouchTap={this.handleClose}>Otro</MenuItem>
      </Drawer>
    );
  }
}
