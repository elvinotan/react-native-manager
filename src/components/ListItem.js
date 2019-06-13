import React, { Component } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import { CardSection } from "./commons";
import { connect } from "react-redux";

class ListItem extends Component {
  onPress() {}

  render() {
    const { name } = this.props;

    return (
      <TouchableWithoutFeedback onPress={() => this.onPress()}>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
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
  null
)(ListItem);
