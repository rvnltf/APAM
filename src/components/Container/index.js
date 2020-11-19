import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { News } from '../../assets';

const Container = () => {
  return (
    <View style={styles.container}>
        <Image source={News} style={styles.news} />
        <View style={styles.isiNews}>
          <Text style={styles.judul}>Kenali Gejalan Covid-19</Text>
          <Text style={styles.isi}>Edukasi Singkat Mengenai gejalan klinis Covid-19</Text>
        </View>
    </View>
  );
};

export default Container;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginTop: -windowHeight * 0.13,
    flexDirection: 'row',
  },
  isiNews: {
    flexShrink: 1,
  },
  judul: {
    fontSize: 14,
    color: 'black',
    padding: 10
  },
  isi: {
    fontSize: 10,
    color: 'black',
    paddingHorizontal: 10
  },
  news: {
    width: windowWidth * 0.58,
    height: windowHeight * 0.25
  }
});
