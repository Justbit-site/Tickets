import React from 'react';
import Formsy from 'formsy-react';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import GetMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import reqwest from 'reqwest';
import {redA400, blueA400, pink500} from 'material-ui/styles/colors';

export class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown_content: '',
      html_content: '',
      error: ''
    };
  }

  submitForm(){
    reqwest({
      url: '/posts.json',
      method: 'POST',
      data:{
        post:{
          markdown_content: this.state.markdown_content
        }
      },
      headers: {
        'X-CSRF-Token': window.JustbitSocial.token
      }
    }).then(data => {
      console.log(data);
    }).catch(console.log);
  }

  syncField(ev, fieldName){
    let element = ev.target;
    let value = element.value;
    let jsonState = {};
    jsonState[fieldName] = value;
    this.setState(jsonState);
  }

  render(){
    return(
      <MuiThemeProvider>
        <Formsy.Form onValidSubmit={() => this.submitForm()}>
          <FormsyText
            name="post[markdown_content]"
            required
            onChange={(e) => this.syncField(e, 'markdown_content')}
            fullWidth={true}
            floatingLabelText="Cuentanos que esta pasando"
            multiLine={true}
            rows={2}
            rowsMax={4}>
          </FormsyText>
          <div>
            <RaisedButton
              label="Publicar estado"
              type="submit"
              secondary={true}>
            </RaisedButton>
          </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
