import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ButtonBottom = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonBottom;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  button:{
    width: windowWidth,
    backgroundColor: '#EB3B65',
  },
  text: {
    paddingVertical: 25,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },

});
