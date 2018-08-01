import React from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {STATUS_READY} from '../tools/consts';
import {AUTH_OK} from '../tools/consts';
import {AUTH_URL} from '../tools/consts';

import {Card} from 'react-native-material-ui';

import {TOKEN_REFERENCE} from '../tools/keys';

const ERROR_MSG = "Please, sign up";

export default class LoginScreen extends React.Component {
auth = () => {
    let connection = new XMLHttpRequest();

    let requestBody = {
        username: this.state.username,
        password: this.state.password
    };

    connection.onreadystatechange = () => {
        if (connection.readyState != STATUS_READY) return;

        if (connection.status === AUTH_OK) {
            let response = JSON.parse(connection.responseText);
            AsyncStorage.setItem(TOKEN_REFERENCE,response.token);
        } else {
            alert(ERROR_MSG);
        }
    };

    connection.open("POST", AUTH_URL, true);
    connection.setRequestHeader("Content-Type", "application/json");

    connection.send(JSON.stringify(requestBody));
};


constructor(props) {
        super(props);

        this.state = {
            companyName: 'GoldTruck',
            username: "",
            password: ""
        }
    }
 static navigationOptions = {
        title: 'Login',
        headerStyle: {
            backgroundColor: '#1B1E23'
          },
      };

  render() {
    return (
      <View style={styles.container}>
        <Icon
        name="local-shipping"
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

        <View style={{height: 15}} />

        <Card />

        <Icon.Button
        name="person"
        backgroundColor="#F9BC3A"
        size={25}
        color="#fff"
        onPress={this.auth} >
         <Text style={styles.button} >Login</Text>
        </Icon.Button> 

        <View style={{height: 15}} />

        <Icon.Button
        onPress={() => this.props.navigation.navigate("RegisterFirst")}
        name="person-add"
        backgroundColor="#F9BC3A"
        size={25}
        color="#fff" >
         <Text allowFontScaling={true} style={styles.button} >Register</Text>
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
