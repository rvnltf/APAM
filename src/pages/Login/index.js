import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TopBackground, Arrow  } from "../../assets";
import { FloatingTitleTextInputField } from "../../utils/FloatingTitleTextInputField";
import { ButtonBottom } from "../../components";
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component{

    state = {
      email: '',
      password: '',
    }
  
    _updateMasterState = (attrName, value) => {
      this.setState({ [attrName]: value });
    }

    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.background}>
                <Image source={TopBackground} style={styles.topBackground} />
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Arrow/>
                </TouchableOpacity>
                <Text style={styles.welcome}>Selamat Datang</Text>
                <ScrollView style={styles.container}>
                    <Text style={styles.headerText}>Silahkan masuk dengan data anda yang terdaftar</Text>
                    <FloatingTitleTextInputField
                    attrName = 'email'
                    title = 'Email'
                    value = {this.state.email}
                    updateMasterState = {this._updateMasterState}
                    textInputStyles = {{ // here you can add additional TextInput styles
                        color: 'black',
                        fontSize: 20,
                        bottom: -15
                    }}
                    />
                    <FloatingTitleTextInputField
                    attrName = 'password'
                    title = 'Password'
                    value = {this.state.password}
                    updateMasterState = {this._updateMasterState}
                    textInputStyles = {{ // here you can add additional TextInput styles
                        color: 'black',
                        fontSize: 20,
                        bottom: -15
                    }}
                    otherTextInputProps = {{   // here you can add other TextInput props of your choice
                        secureTextEntry: true,
                    }}
                    />
                </ScrollView>
                <View style={styles.buttonBottom}>
                    <ButtonBottom title="MASUK" onPress={() => navigation.navigate('MainApp')}/>
                </View>
            </View>
        );
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    background:{
        flex: 1,
    },
    topBackground:{
        width: windowWidth * 1,
        height: windowHeight * 0.27,
        position: 'absolute',
        top: 0
    },
    back: {
        marginTop: 20,
        marginLeft: 20
    },
    welcome: {
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        width: windowWidth * 0.5,
        marginTop: 25,
        marginLeft: 60
    },
    container: {
        margin: 50
    },
    headerText: {
        marginBottom: 100,
        width: windowWidth * 0.8,
        fontSize: 30,
        textAlign: 'center',
    },
    buttonBottom: {
        position: 'absolute',
        bottom: 0
    }
});
