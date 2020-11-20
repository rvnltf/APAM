import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LogoAPAM, Ellipse } from "../../assets";

const Welcome = ({navigation}) => {
    return (
        <View style={styles.background}>
            <Image source={LogoAPAM} style={styles.logo} />
            <Text style={styles.judul}>RSMM INDRAMAYU</Text>
            <Text style={styles.text}>Aplikasi Antrian dan Pasien Mandiri</Text>
            <Image source={Ellipse} style={styles.ellipse} />
            <View style={styles.grup}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.buttonAtas}>
                        <Text style={styles.textButton}>MASUK</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <View style={styles.buttonBawah}>
                        <Text style={styles.textButton}>DAFTAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
        fontWeight: 'bold',
        paddingBottom: 100
    },
    textButton: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white'
    },
    grup: {
        position: 'absolute',
        bottom: 70,
    },
    buttonAtas:{
        backgroundColor: '#EB3B65',
        width: windowWidth * 0.7,
        height: windowHeight * 0.08,
        borderRadius: windowHeight * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    buttonBawah: {
        width: windowWidth * 0.7,
        height: windowHeight * 0.08,
        borderRadius: windowHeight * 0.04,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        borderColor: 'white',
        borderWidth: 3
    },
    ellipse:{
        width: windowWidth,
        height: windowHeight * 0.28,
        position: 'absolute',
        bottom: 0
    }
})
