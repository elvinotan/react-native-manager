import React from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "redux";

const Input = ({ label, ...otherProps }) => {
  const { viewStyle, textStyle, inputStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{label}</Text>
      <TextInput style={inputStyle} {...otherProps} />
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    width: 80,
    color: "#007aff"
  },

  inputStyle: {
    width: 300,
    borderWidth: 1, // kasih border
    borderRadius: 5, // Setiap corner di buat round
    borderColor: "#007aff" // Gray border
  }
};

export { Input };
