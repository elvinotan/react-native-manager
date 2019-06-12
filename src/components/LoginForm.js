import React, { Component } from "react";
import { Card, CardSection, Button, Input } from "./commons";
import { fEmailChanged, fPasswordChanged, fLoading } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  login() {
    const { email, password, fLoading } = this.props;
    fLoading(true);
  }

  render() {
    const { email, password, fEmailChanged, fPasswordChanged } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            value={email}
            onChangeText={text => fEmailChanged(text)}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Passsword"
            placeholder="password"
            value={password}
            onChangeText={text => fPasswordChanged(text)}
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
  return { ...state.auth, ...state.loading };
};

export default connect(
  mapStateToProp,
  {
    fEmailChanged,
    fPasswordChanged,
    fLoading
  }
)(LoginForm);
