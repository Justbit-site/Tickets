// Material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {purple100, purple500, purple700} from 'material-ui/styles/colors';

export const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple500,
    primary2Color: purple700,
    primary3Color: purple100,
  }
  // appBar: {
  //   height: 75,
  //   textColor: 'white'
  // }
}, {
  avatar: {
    borderColor: null,
    //userAgent: req.headers['user-agent'],
  }
});
