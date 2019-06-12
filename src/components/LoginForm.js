import React, { Component } from "react";
import { Card, CardSection, Button, Input } from "./commons";
import { emailChanged, passwordChanged } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  login() {
    const { email, password } = this.props;
    console.log("Email " + email);
    console.log("Password " + password);
  }

  render() {
    // console.log(this.props);
    const { email, password, emailChanged, passwordChanged } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={email}
            onChangeText={text => emailChanged(text)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Passsword"
            placeholder="password"
            value={password}
            onChangeText={text => passwordChanged(text)}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => this.login()}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProp = state => {
  console.log(state);
  return { ...state.auth };
};

export default connect(
  mapStateToProp,
  { emailChanged, passwordChanged }
)(LoginForm);
