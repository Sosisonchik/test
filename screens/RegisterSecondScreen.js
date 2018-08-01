import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {STATUS_READY} from '../tools/consts';

export default class RegisterFirstScreen extends React.Component {
  static navigationOptions = {
    title: 'Registration',
    headerStyle: {
      backgroundColor: '#1B1E23'
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    }
  }

  register = () => {
    let connection = new XMLHttpRequest();
    let { navigation } = this.props;
    let requestBody = {  
        first_name: navigation.getParam("name", null),
        last_name: navigation.getParam("lastname", null),
        phone_number: navigation.getParam("number", null),
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
    };

    connection.onreadystatechange = () => {
        if (connection.readyState != STATUS_READY) return;

        if (connection.status === 201) {
            navigation.popToTop();
        } else {
            console.log(connection.responseText)
            alert(connection.responseText);
        }
    };

    connection.open("POST", "http://api.goltruck.com/registration/customer/user/", true);
    connection.setRequestHeader("Content-Type", "application/json");

    connection.send(JSON.stringify(requestBody));
}

  render() {
    return (
      <View style={styles.container}>
      <Icon
      name="local_shipping"
      size={125}
      color="#F9BC3A" />

      <Text style={styles.title}>{this.state.companyName}</Text>

      <TextInput 
      autoCapitalize="none"
      style={styles.input}
      underlineColorAndroid="transparent"
      value={this.state.username}
      onChangeText={(text) => this.setState({username: text})}
      placeholder="Username"/>     

      <TextInput 
      autoCapitalize="none"
      secureTextEntry={true}
      style={styles.input}
      underlineColorAndroid="transparent"
      value={this.state.password}
      onChangeText={(text) => this.setState({password: text})}
      placeholder="Password"/>    

      <TextInput 
      autoCapitalize="none"
      keyboardType="email-address"
      style={styles.input}
      underlineColorAndroid="transparent"
      value={this.state.email}
      onChangeText={(text) => this.setState({email: text})}
      placeholder="Email"/>    

      <View style={{height: 15}} />

      <Icon.Button
      name="check"
      backgroundColor="#F9BC3A"
      size={25}
      color="#fff"
      onPress={this.register} >
       <Text style={styles.button} >Sign up</Text>
      </Icon.Button> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: "#272C32" 
  },
  title: {
      color: "#fff",
      fontSize: 27,
      fontWeight: 'bold',
      marginBottom: 25,
  },
  input: {
      width: "85%",
      backgroundColor: "#fff",
      color: "#000",
      padding: 10,
      borderWidth: 2,
      borderColor: "#fff",
      borderRadius: 5,
      fontSize: 21,
      marginBottom: 10,
  },
  button: {
      color: "#fff",
      width: '75%',
      padding: 5,
      fontSize: 25,
      fontWeight: "bold"
  }
})

