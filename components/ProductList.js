import React from 'react';
import {PRODUCTS} from '../Utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

const getOnPressItem = () => Alert.alert('alert');

const GridView = ({data, navigation}) => (
  <View style={styleSheet.gridbox}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetails', {productDetails: data})
      }>
      <Image
        resizeMode="contain"
        source={{
          uri: data.uri,
        }}
        style={{width: '50%', aspectRatio: 1 / 1, borderRadius: 50}}
      />
      <Text style={styleSheet.gridText}>{data.title}</Text>
      <Text style={{fontSize: 14}}>{data.price}</Text>
    </TouchableOpacity>
  </View>
);

export default function ProductList({navigation}) {
  return (
    <LinearGradient
      colors={['white', '#dab3ff']}
      style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
      }}>
      <FlatList
        data={PRODUCTS}
        renderItem={({item}) => (
          <GridView data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id}
      />
    </LinearGradient>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  gridbox: {
    flex: 1,
    height: 180,
    borderWidth: 0.5,
    borderColor: 'lightgray',
    borderRadius: 10,
    margin: 15,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  gridText: {
    fontSize: 18,
    fontWeight: 500,
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
  },
});
