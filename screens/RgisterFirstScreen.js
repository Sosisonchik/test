import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

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
      name: "",
      surname: "",
      number: ""
    }
  }

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
      value={this.state.name}
      onChangeText={(text) => this.setState({name: text})}
      placeholder="Name"/>     

      <TextInput 
      autoCapitalize="none"
      style={styles.input}
      underlineColorAndroid="transparent"
      value={this.state.surname}
      onChangeText={(text) => this.setState({surname: text})}
      placeholder="Surname"/>    

      <TextInput 
      autoCapitalize="none"
      style={styles.input}
      underlineColorAndroid="transparent"
      value={this.state.number}
      onChangeText={(text) => this.setState({number: text})}
      onFocus={() => this.setState({number: "+380"})}
      placeholder="Number"/>    

      <View style={{height: 15}} />

      <Icon.Button
      name="arrow-right"
      backgroundColor="#F9BC3A"
      size={25}
      color="#fff"
      onPress={() => this.props.navigation.navigate('RegisterSecond', {
        name: this.state.name,
        lastname: this.state.surname,
        number: this.state.number
      })} >
       <Text style={styles.button} >Next</Text>
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

