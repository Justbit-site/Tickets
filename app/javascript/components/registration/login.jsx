import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles } from './base';
import reqwest from 'reqwest';

export class Login extends Base {
  submit(){
    reqwest({
      url: '/users/sign_in.json',
      method: 'post',
      data: {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      },
      headers: {
        'X-CSRF-Token': window.JustbitSocial.token
      }
    }).then((data) => {
      console.log(data);
      this.reload();
    }).catch((err) => this.handleError(err));
  }

  handleError(err){
    const errorMessage = JSON.parse(err.response).error;
    this.state.error = errorMessage;
  }

  render(){
    return (
      <MuiThemeProvider>
        <Formsy.Form onValid={()=> this.enableSubmitBtn()}
                      onInvalid={()=> this.disableSubmitBtn()}
                      onValidSubmit={()=> this.submit()}>
            <div>{this.state.error}</div>
            <div>
              <FormsyText
                onChange={(e)=> {this.syncField(e, "email");}}
                name="email"
                required
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                validations="isEmail"
                validationError="Asegurese de que sea un correo valido"
                floatingLabelText="Correo electrónico"/>
            </div>
            <div>
              <FormsyText
                onChange={(e)=> {this.syncField(e, "password");}}
                name="password"
                required
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                type="password"
                floatingLabelText="Contraseña"/>
            </div>
            <div>
              <RaisedButton
                style={styles.buttonTop}
                disabled={!this.state.canSubmit}
                backgroundColor={styles.red}
                labelColor="#fff"
                type="submit"
                label="Iniciar seción"/>
              <a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Crear cuenta</a>
            </div>
            <div>
              <a href="/users/auth/facebook">Iniciar sesión usando Facebook</a>
            </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
