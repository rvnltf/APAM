import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LogoAPAM } from "../../assets";

const Welcome = () => {
    return (
        <View style={styles.background}>
            <Image source={LogoAPAM} style={styles.logo} />
        </View>
    );
}

export default Welcome

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    logo: {
        width: 342,
        height: 180,
    }
})
