/* eslint-disable react/no-unstable-nested-components */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/components/Login';
import SignUp from './src/components/SignUp';
import ProductList from './src/components/ProductList.js';
import ProductDetails from './src/components/ProductDetails';
import Cart from './src/components/Cart';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthContextProvider, {AuthContext} from './src/store/auth-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Alert, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

function UnAthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen name="Signin" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
}

export function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerRight: () => <Button onPress={authCtx.logout} title="Logout" />,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerRight: () => <Button onPress={authCtx.logout} title="Logout" />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerRight: () => <Button onPress={authCtx.logout} title="Logout" />,
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  // const [loggedIn, setLoggedIn] = useState(null);
  // useEffect(() => {
  //   auth().onAuthStateChanged(user => {
  //     console.log('user', user);
  //     setLoggedIn(user);
  //   });
  // }, []);

  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authCtx?.isAuthenticated ? (
        <AuthenticatedStack />
      ) : (
        <UnAthenticatedStack />
      )}
    </NavigationContainer>
  );
}
const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </SafeAreaView>
  );
};

export default App;
