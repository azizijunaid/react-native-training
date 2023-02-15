import React, {useState} from 'react';
import CustomHeader from './CustomHeader';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      {/* <CustomHeader title="Product List" /> */}
      <ScrollView style={styles.safeContainer}>
        <View style={styles.container}>
          <Text style={{...styles.signInFontSize, marginBottom: '10%'}}>
            Sign Up
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Full name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Confirm Password"
          />

          <TouchableOpacity style={styles.signInBtn}>
            <Text
              style={{
                ...styles.signInFontSize,
                color: 'purple',
                marginTop: 5,
              }}>
              Sign Up
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

          <TouchableOpacity
            style={{marginTop: '20%'}}
            onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                ...styles.signInFontSize,
                color: 'purple',
                marginTop: 5,
                fontSize: 16,
              }}>
              Already have an account?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
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
    width: 360,
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

export default SignUp;
