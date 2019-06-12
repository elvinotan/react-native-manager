import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Card, CardSection, Button, Input } from "./commons";
import { fEmailChanged, fPasswordChanged, fLoginUser } from "../actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  login() {
    const { email, password, fLoginUser } = this.props;

    fLoginUser({ email, password });
  }

  loading() {
    const { loading } = this.props;
    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  }

  errors() {
    const { errors } = this.props;
    return errors != null ? (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>{errors.message}</Text>
      </View>
    ) : null;
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
        {this.errors()}
        <CardSection>
          <Button onPress={() => this.login()}>Login</Button>
        </CardSection>
        {this.loading()}
      </Card>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
};

const mapStateToProp = state => {
  const newprop = { ...state.auth, ...state.general };
  console.log("MapStateToProp Called");
  return newprop;
};

export default connect(
  mapStateToProp,
  {
    fEmailChanged,
    fPasswordChanged,
    fLoginUser
  }
)(LoginForm);
