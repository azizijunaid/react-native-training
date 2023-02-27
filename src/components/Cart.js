import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRODUCTS} from '../utils/constants';
import LinearGradient from 'react-native-linear-gradient';

export default function Cart() {
  const [counter, setCounter] = useState(0);
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    if (counter <= 0) {
      return;
    } else {
      setCounter(counter - 1);
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
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{flex: 4}}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                }}
                source={{uri: PRODUCTS[0].uri}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginLeft: 10,
                  fontWeight: 10,
                }}>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].title}</Text>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  verticalAlign: 'center',
                  marginTop: 30,
                  // backgroundColor: 'red',
                  // marginRight: 30,
                }}>
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
                <Text style={{fontSize: 20, color: '#23046a'}}>{counter}</Text>
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
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                }}
                source={{uri: PRODUCTS[0].uri}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginLeft: 10,
                  fontWeight: 10,
                }}>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].title}</Text>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  verticalAlign: 'center',
                  marginTop: 30,
                  // backgroundColor: 'red',
                  // marginRight: 30,
                }}>
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
                <Text style={{fontSize: 20, color: '#23046a'}}>{counter}</Text>
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
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                }}
                source={{uri: PRODUCTS[0].uri}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginLeft: 10,
                  fontWeight: 10,
                }}>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].title}</Text>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  verticalAlign: 'center',
                  marginTop: 30,
                  // backgroundColor: 'red',
                  // marginRight: 30,
                }}>
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
                <Text style={{fontSize: 20, color: '#23046a'}}>{counter}</Text>
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
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                }}
                source={{uri: PRODUCTS[0].uri}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginLeft: 10,
                  fontWeight: 10,
                }}>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].title}</Text>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  verticalAlign: 'center',
                  marginTop: 30,
                  // backgroundColor: 'red',
                  // marginRight: 30,
                }}>
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
                <Text style={{fontSize: 20, color: '#23046a'}}>{counter}</Text>
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
            </View>
          </View>
          <View style={{flex: 4}}>
            <View
              style={{
                //   flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Image
                style={{
                  resizeMode: 'cover',
                  height: 100,
                  width: 100,
                }}
                source={{uri: PRODUCTS[0].uri}}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  marginLeft: 10,
                  fontWeight: 10,
                }}>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].title}</Text>
                <Text style={{color: '#23046a'}}>{PRODUCTS[0].price}</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  verticalAlign: 'center',
                  marginTop: 30,
                  // backgroundColor: 'red',
                  // marginRight: 30,
                }}>
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
                <Text style={{fontSize: 20, color: '#23046a'}}>{counter}</Text>
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
            </View>
          </View>
        </ScrollView>
        <View style={{flex: 0.2, marginTop: 30}}>
          <View
            style={{
              flex: 0.6,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 20, color: '#23046a'}}>Total</Text>
            <Text style={{fontSize: 20, color: '#23046a'}}>Rs: 300</Text>
          </View>
          <TouchableOpacity style={{width: 300, marginLeft: 50}}>
            <Button title="Proceed To Checkout" color="#23046a" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
