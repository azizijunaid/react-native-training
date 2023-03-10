import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function Checkout({navigation, route}) {
  const {total} = route.params;
  return (
    <LinearGradient
      colors={['white', '#dab3ff']}
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <Text style={styles.delivery}>Delivery Address:</Text>
      <View style={styles.streePhone}>
        <TextInput style={styles.input} placeholder="Street address" />
        <TextInput style={styles.input} placeholder="Phone" />
      </View>
      <View style={styles.streePhone}>
        <TextInput style={styles.input} placeholder="City" />
        <TextInput style={styles.input} placeholder="Country" />
      </View>
      <Text style={styles.delivery}>Payment Method:</Text>
      <Text style={{...styles.delivery, fontSize: 15}}>Cash on delivery</Text>
      <Text style={styles.delivery}>Total:</Text>
      <View style={{flex: 1}}>
        <Text style={{...styles.delivery, fontSize: 15}}>Total: {total}</Text>
      </View>
      <TouchableOpacity style={{width: 300, marginLeft: 50, marginBottom: 20}}>
        <Button title="Finish Checkout" color="#23046a" />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  delivery: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    // marginBottom: 20,
  },
  streePhone: {
    borderColor: '#23046a',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    height: 50,
    textAlign: 'left',
    borderWidth: 1,
    borderColor: 'black',
    width: '45%',
    borderRadius: 5,
    backgroundColor: 'transparent',
    margin: 10,
    padding: 5,
  },
});
