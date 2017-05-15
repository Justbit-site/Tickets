// React
import React, {Component} from 'react';
// Reqwest
import reqwest from 'reqwest';
// Material-ui
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// Colors Material-ui
import {white} from 'material-ui/styles/colors';

export default class Options extends Component {
  constructor(props){
    super(props);
    this.closeSession = this.closeSession.bind(this);
  }

  closeSession(){
    reqwest({
      url: '/signout',
      method: 'post',
      headers: {
        'X-CSRF-Token': window.JustbitSocial.token
      }
    }).then((data) => {
      //window.location.reload();
    }).catch((err) => this.handleError(err));
  }

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Cerrar sesión"
                  onTouchTap={this.closeSession} />
      </IconMenu>
    );
  }
}
//<FlatButton label="Login"// />
