import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { LogoSplash } from "../../assets";

const splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 3000)
    }, [navigation]);

    return (
        <View style={styles.background}>
            <Image source={LogoSplash} style={styles.logo} />
        </View>
    );
}

export default splash;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 320,
        height: 132
    }
});
