import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection } from "./commons";
import { fEmployeeFetch } from "../actions";
import _ from "lodash";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fEmployeeFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextPros) {
    this.createDataSource(nextPros);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(row) {
    return <ListItem {...row} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={row => this.renderRow(row)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const employees = Object.values(state.employees).map(value => {
    return value;
  });

  return { ...state.general, employees };
};

export default connect(
  mapStateToProps,
  { fEmployeeFetch }
)(EmployeeList);
