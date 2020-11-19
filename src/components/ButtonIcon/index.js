import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {
  IconPendaftaran,
  IconJadwal,
  IconOperasi
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Pendaftaran Online') return <IconPendaftaran />;

    if (title === 'Jadwal Dokter') return <IconJadwal />;

    if (title === 'Jadwal Operasi') return <IconOperasi />;

    return <IconPendaftaran />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.button}>
        <Icon />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
      marginBottom : 20,
      flexDirection: 'row'
  }, 
  button:{
    width: windowWidth * 0.25,
    height: windowHeight * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    padding: 10,
    fontSize: 14,
    textAlign: 'center',
    flexShrink: 1,
  },

});
