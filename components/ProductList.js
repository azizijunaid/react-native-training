import React from 'react';
import {PRODUCTS} from '../Utils/constants';
import CustomHeader from './CustomHeader';
import {View, StyleSheet, FlatList, Text, Alert, Image} from 'react-native';

const getOnPressItem = () => Alert.alert('alert');

const GridView = ({data, navigation}) => (
  <View style={styleSheet.gridbox} onPress={navigation.navigate('ProductList')}>
    <Image
      resizeMode="contain"
      source={{
        uri: data.uri,
      }}
      style={{width: '50%', aspectRatio: 1 / 1, borderRadius: 50}}
    />
    <Text
      style={styleSheet.gridText}
      onPress={() => {
        getOnPressItem(data);
      }}>
      {data.title}
    </Text>
    <Text
      style={{fontSize: 14}}
      onPress={() => {
        getOnPressItem(data);
      }}>
      {data.price}
    </Text>
  </View>
);

export default function ProductList({navigation}) {
  return (
    <>
      {/* <CustomHeader title="Product List" /> */}
      <FlatList
        data={PRODUCTS}
        renderItem={({item}) => (
          <GridView data={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id}
      />
    </>
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
  },
});
