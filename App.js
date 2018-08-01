import {StackNavigator} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import RegisterFirstScreen from './screens/RgisterFirstScreen';
import RegisterSecondScreen from './screens/RegisterSecondScreen';

const App = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  RegisterFirst: {
    screen: RegisterFirstScreen
  },
  RegisterSecond: {
    screen: RegisterSecondScreen
  }
},
{
  initialRouteName: 'Login',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#F9BC3A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default App;