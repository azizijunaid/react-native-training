import React, {useState} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function ProductDetails({navigation, route}) {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };
  const minus = () => {
    // Counter state is incremented
    if (counter <= 0) {
      return;
    }
  };
  const {productDetails} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        colors={['white', '#dab3ff']}
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 6,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Image
              source={{
                uri: productDetails.uri,
              }}
              style={{
                width: '85%',
                aspectRatio: 1 / 1,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={{flex: 1, borderTopWidth: 1, borderColor: 'gray'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#23046a'}}>
                {productDetails.title}
              </Text>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#23046a'}}>
                {productDetails.price}
              </Text>
            </View>
          </View>
          <View style={{flex: 1, padding: 20}}>
            <Text style={{color: '#23046a'}}>{productDetails.discription}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
              verticalAlign: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#23046a'}}>Quantity</Text>
            <TouchableOpacity style={{borderRadius: 50}} onPress={minus}>
              <Icon
                name="minus"
                size={15}
                color="#900"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: '#23046a',
                  padding: 9,
                  color: 'white',
                }}
              />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>{counter}</Text>
            <TouchableOpacity onPress={plus}>
              <Icon
                name="plus"
                size={15}
                color="#900"
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: '#23046a',
                  padding: 9,
                  color: 'white',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{padding: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity style={{width: 130}}>
                <Button title="Buy Now" color="#23046a" />
              </TouchableOpacity>
              <TouchableOpacity style={{width: 130}}>
                <Button title="Add to Cart" color="orange" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
