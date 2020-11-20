import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconBerita, IconBeritaActive, IconBeranda, IconBerandaActive, IconRiwayat, IconRiwayatActive, IconProfil, IconProfilActive} from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "Beranda") return isFocused ? <IconBerandaActive/> : <IconBeranda />

      if(label === "Riwayat") return isFocused ? <IconRiwayatActive/> : <IconRiwayat />

      if(label === "Berita") return isFocused ? <IconBeritaActive/> : <IconBerita />

      if(label === "Profil") return isFocused ? <IconProfilActive/> : <IconProfil />

      return <IconBeranda />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE
    })
});
