import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Card, CardSection, Button } from "./commons";
import { fEmployeeUpdate } from "../actions";
import { connect } from "react-redux";

class EmployeeCreate extends Component {
  saveUser() {}

  loading() {
    const { loading } = this.props;

    return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null;
  }
  errors() {
    const { errors } = this.props;

    return errors != null ? (
      <CardSection style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>{errors.message}</Text>
      </CardSection>
    ) : null;
  }

  render() {
    const { name, phone, shift, fEmployeeUpdate } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            key="name"
            label="Name"
            placeholder="Employee name"
            value={name}
            onChangeText={text =>
              fEmployeeUpdate({ prop: "name", value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            key="tlp"
            label="Phone"
            placeholder="555-555-555"
            value={phone}
            onChangeText={text =>
              fEmployeeUpdate({ prop: "phone", value: text })
            }
          />
        </CardSection>
        <CardSection />
        {this.errors()}
        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.employeeForm, ...state.general };
};

export default connect(
  mapStateToProps,
  { fEmployeeUpdate }
)(EmployeeCreate);
