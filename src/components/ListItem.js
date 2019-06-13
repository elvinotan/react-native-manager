import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./commons";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { fEmployeeEdit } from "../actions";

class ListItem extends Component {
  onPress() {
    const { name, phone, shift, uid, fEmployeeEdit } = this.props;
    fEmployeeEdit({ name, phone, shift, uid });
  }

  render() {
    const { name } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(
  null,
  { fEmployeeEdit }
)(ListItem);
