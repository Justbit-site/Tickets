import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles } from './base';
import reqwest from 'reqwest';

export class SignUp extends Base {
  submit(){
    if (this.state.password == this.state.passwordConfirmation){
      reqwest({
        url: '/users.json',
        method: 'post',
        data: {
          user: {
            email: this.state.email,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation
          }
        },
        headers: {
          'X-CSRF-Token': window.JustbitSocial.token
        }
      }).then((data) => {
        console.log(data);
        this.reload();
      }).catch((err) => this.handleError(err));
    }else{
      this.setState({
        error: 'Las contraseñas no coinsiden, intente de nuevo',
        isAlert: true
      });
    }
  }

  handleError(err){
    const jsonError = JSON.parse(err.response);
    const errors = jsonError.errors;
    let errorsResponse = [];

    for(let key in errors){
        errorsResponse.push(<li>{errors[key]}</li>);
    }

    this.setState({
      error: errorsResponse,
      isAlert: true
    });
  }

  render(){
    return (
      <MuiThemeProvider>
        <Formsy.Form onValid={()=> this.enableSubmitBtn()}
                      onInvalid={()=> this.disableSubmitBtn()}
                      onValidSubmit={()=> this.submit()}>
           <div className={(this.state.isAlert ? 'alert alert-danger' : '')}>{this.state.error}</div>
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
              <FormsyText
                onChange={(e)=> {this.syncField(e, "passwordConfirmation");}}
                name="passwordConfirmation"
                required
                floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                underlineFocusStyle={styles.underlineStyle}
                type="password"
                floatingLabelText="Confirmar Contraseña"/>
            </div>
            <div>
              <RaisedButton
                style={styles.buttonTop}
                disabled={!this.state.canSubmit}
                backgroundColor={styles.red}
                labelColor="#fff"
                type="submit"
                label="Crear Cuenta"/>
              <a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Ya tengo cuenta</a>
            </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
