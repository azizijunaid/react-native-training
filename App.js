/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/components/Login';
import SignUp from './src/components/SignUp';
import ProductList from './src/components/ProductList.js';
import ProductDetails from './src/components/ProductDetails';
import Cart from './src/components/Cart';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/store/store';
import {logOutFunc} from './src/store/slices';
import {StyleSheet} from 'react-native';
const Stack = createNativeStackNavigator();

const UnAthenticatedStack = () => {
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
};

const AuthenticatedStack = () => {
  const dispatch = useDispatch();
  const logOutFn = () => {
    dispatch(logOutFunc());
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerRight: () => <Button onPress={logOutFn} title="Logout" />,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerRight: () => <Button onPress={logOutFn} title="Logout" />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerRight: () => <Button onPress={logOutFn} title="Logout" />,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <UnAthenticatedStack />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
