import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {ImageHeader, User, Eclipse} from '../../assets';
import {Container, AntrianAktif} from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import {WARNA_ABU_ABU} from '../../utils/constant';
import {ScrollView} from 'react-native-gesture-handler';

const Beranda = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Eclipse} style={styles.eclipse} />
          <Image source={User} style={styles.user} />
          <View style={styles.hello}>
            <Text style={styles.username}>A. Rivan </Text>
            <Text style={styles.norm}>012345</Text>
          </View>
        </ImageBackground>
        <Container />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Pendaftaran Online" />
            <ButtonIcon title="Jadwal Dokter" />
            <ButtonIcon title="Jadwal Operasi" />
          </View>
        </View>
        <View style={styles.AntrianAktif}>
          <Text style={styles.label}>Antrian Anda</Text>
          <AntrianAktif title="Riwayat No. 0002142"/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    position: 'relative',
    width: windowWidth,
    height: windowHeight * 0.28,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  eclipse: {
    position: 'absolute',
    right: 0,
    width: windowWidth * 0.4,
    height: windowHeight * 0.18,
  },
  user: {
    width: windowWidth * 0.16,
    height: windowHeight * 0.08,
  },
  hello: {
    marginTop: windowHeight * 0.02,
    paddingLeft:15
  },
  username: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'TitilliumWeb-Bold',
  },
  norm: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'TitilliumWeb-Regular',
  },
  layanan: {
    paddingTop: 10,
  },
  label: {
    paddingLeft: 30,
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 35,
  },
  AntrianAktif: {
    paddingTop: 10,
    paddingHorizontal: 30,
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
