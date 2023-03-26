import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login/Login';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
           <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  headerBackTitleVisible: false
                }}
              />
              <Stack.Screen
               name="CreateAccount"
               component={CreateAccount}
               options={{
                 headerShown: false,
                 headerBackTitleVisible: false
               }}
             />
           </Stack.Navigator>

    </NavigationContainer>
)
}


export default App;
