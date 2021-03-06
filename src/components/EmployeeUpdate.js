import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Input, Card, CardSection, Button, InputPicker } from "./commons";
import { fEmployeeUpdate, fEmployeeCreate } from "../actions";
import { connect } from "react-redux";

class EmployeeUpdate extends Component {
  saveUpdate() {
    console.log("Unimplemented");
  }

  deleteUser() {
    console.log("Unimplemented");
  }

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
    console.log("Props ", this.props.employee);

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
        <CardSection>
          <InputPicker
            items={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" }
            ]}
            label="Shift"
            selectedValue={shift}
            onValueChange={text =>
              fEmployeeUpdate({ prop: "shift", value: text })
            }
          />
        </CardSection>
        {this.errors()}
        <CardSection>
          <Button onPress={() => this.saveUpdate()}>Update</Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.deleteUser()}>Delete</Button>
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
  { fEmployeeUpdate, fEmployeeCreate }
)(EmployeeUpdate);
