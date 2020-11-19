import React from 'react';
import {StyleSheet, Text,View, Dimensions, TouchableOpacity} from 'react-native';
import {IconAntrian} from '../../assets';
import { WARNA_DISABLE } from '../../utils/constant';

const AntrianAktif = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconPoli}>
        <IconAntrian />
        <Text style={styles.textPoli}>Poliklinik Syaraf</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>dr. Andi Suharso, Sp. S</Text>
        <Text style={styles.status}>Penjamin</Text>
        <Text style={styles.status}>Tanggal</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AntrianAktif;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginVertical: windowHeight*0.02,
  },
  iconPoli: {
    width: windowWidth*0.15,
    height: windowHeight*0.13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPoli: {
    textAlign: 'center',
    flexShrink: 1,
    fontSize: 16,
  },
  text: {
    marginLeft: windowWidth*0.02,
  },
  title: {
    fontSize: 22,
  },
  status: {
    fontSize: 18,
    color : WARNA_DISABLE
  }
});
