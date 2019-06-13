import React from "react";
import { View, Text, Picker } from "react-native";

const InputPicker = ({ label, items, ...otherProps }) => {
  const { viewStyle, textStyle, inputStyle } = styles;

  renderItem = () => {
    return items.map(item => {
      return (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      );
    });
  };

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{label}</Text>
      <Picker style={inputStyle} {...otherProps}>
        {this.renderItem()}
      </Picker>
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

export { InputPicker };
