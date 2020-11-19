import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LogoAPAM, Ellipse } from "../../assets";

const Welcome = () => {
    return (
        <View style={styles.background}>
            <Image source={LogoAPAM} style={styles.logo} />
            <Text style={styles.judul}>RSMM INDRAMAYU</Text>
            <Text style={styles.text}>Aplikasi Antrian dan Pasien Mandiri</Text>
            <TouchableOpacity style={styles.grup}>
                <View style={styles.button}>
                    <Text style={styles.text}>MASUK</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.grup}>
                <View style={styles.button}>
                    <Text style={styles.text}>DAFTAR</Text>
                </View>
            </TouchableOpacity>
            <Image source={Ellipse} style={styles.ellipse} />
        </View>
    );
}

export default Welcome;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 150,
        position: 'relative'
    },
    logo: {
        width: 250,
        height: 60,
    },
    judul: {
        paddingTop: 30,
        fontSize: 40,
        fontWeight: 'bold'
    },
    text: {
        paddingTop: 10,
        fontSize: 28,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#EB3B65',
        width: windowWidth * 0.7,
        height: windowHeight * 0.08,
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grup: {
    },
    ellipse:{
        width: windowWidth,
        height: windowHeight * 0.28,
        position: 'absolute',
        bottom: 0
    }
})
