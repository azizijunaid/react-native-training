import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../store/auth-context';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext);

  const loginHandler = async () => {
    try {
      const signedInUser = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      console.log('signedInUser1');
      authCtx.authenticate({isAuthenticated: true});
      Alert.alert('Message', 'User loggedin successfully');
      console.log('signedInUser', signedInUser);
      navigation.navigate('ProductList');
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', error?.messsage);
    }
  };

  return (
    <LinearGradient
      colors={['white', '#dab3ff']}
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <ScrollView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text style={{...styles.signInFontSize, marginBottom: '10%'}}>
            Sign In
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
          />

          <TouchableOpacity style={styles.signInBtn} onPress={loginHandler}>
            <Text
              style={{
                ...styles.signInFontSize,
                color: 'purple',
                marginTop: 5,
              }}>
              Sign in
            </Text>
          </TouchableOpacity>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={{
                ...styles.signInBtn,
                width: 170,
                verticalAlign: 'center',
              }}>
              <Text
                style={{
                  ...styles.signInFontSize,
                  color: 'purple',
                  marginTop: 12,
                  fontSize: 16,
                }}>
                Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.signInBtn,
                width: 170,
                verticalAlign: 'center',
              }}>
              <Text
                style={{
                  ...styles.signInFontSize,
                  color: 'purple',
                  marginTop: 12,
                  fontSize: 16,
                }}>
                Facebook
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{marginTop: '60%'}}>
            <Text
              style={{
                ...styles.signInFontSize,
                color: 'purple',
                marginTop: 5,
                fontSize: 16,
              }}
              onPress={() => navigation.navigate('Signup')}>
              Don't you have an account
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{marginTop: '0%'}}>
            <Text
              style={{
                ...styles.signInFontSize,
                color: 'purple',
                marginTop: 5,
                fontSize: 16,
              }}
              onPress={() => navigation.navigate('ProductList')}>
              Product List
            </Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    padding: 10,
  },
  signIn: {
    marginTop: 10,
    fontSize: 24,
  },
  signInFontSize: {
    alignSelf: 'center',
    fontSize: 24,
    color: 'purple',
    fontWeight: 500,
  },
  signInBtn: {
    height: 50,
    width: 330,
    margin: 10,
    backgroundColor: '#cbc3e2',
    borderRadius: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default LoginScreen;
