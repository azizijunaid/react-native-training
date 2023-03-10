import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {updateItemQuantity} from '../store/cartSlice';

export default function Cart() {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleUpdateItemQuantity = (item, newQuantity) => {
    dispatch(updateItemQuantity({id: item.id, qty: newQuantity}));
  };

  const total = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const renderItems = ({item}) => {
    return (
      <View style={{flex: 4}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              height: 100,
              width: 100,
            }}
            source={{uri: item.uri}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              marginLeft: 10,
              fontWeight: 10,
            }}>
            <Text style={{color: '#23046a'}}>{item.title}</Text>
            <Text style={{color: '#23046a'}}>{item.price}</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-around',
              verticalAlign: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              style={{borderRadius: 50}}
              onPress={() => handleUpdateItemQuantity(item, item.qty - 1)}>
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
            <Text style={{fontSize: 20, color: '#23046a'}}>{item.qty}</Text>
            <TouchableOpacity
              onPress={() => handleUpdateItemQuantity(item, item.qty + 1)}>
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
        </View>
      </View>
    );
  };
  return (
    <LinearGradient
      colors={['white', '#dab3ff']}
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <FlatList
            data={cartItems}
            renderItem={renderItems}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  backgroundColor: '#23046a',
                  height: 0.5,
                  paddingTop: 2,
                }}
              />
            )}
          />
        </ScrollView>
        <View style={{flex: 0.2, marginTop: 30}}>
          <View
            style={{
              flex: 0.6,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 20, color: '#23046a'}}>Total</Text>
            <Text style={{fontSize: 20, color: '#23046a'}}>Rs: {total()}</Text>
          </View>
          <TouchableOpacity style={{width: 300, marginLeft: 50}}>
            <Button title="Proceed To Checkout" color="#23046a" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
