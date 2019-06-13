/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import firebase from "firebase";
import LoginFrom from "./components/LoginForm";
import ReduxThunk from "redux-thunk";
import Routers from "./Routers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDTmxKXv_2bJ5mr4rzp0XtUVbEGNmr0k3Y",
      authDomain: "manager-f16ce.firebaseapp.com",
      databaseURL: "https://manager-f16ce.firebaseio.com",
      projectId: "manager-f16ce",
      storageBucket: "manager-f16ce.appspot.com",
      messagingSenderId: "762378401889",
      appId: "1:762378401889:web:561993bf18e928c1"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <Routers />
        </View>
      </Provider>
    );
  }
}
export default App;
