import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


export default function detailImageScreen(props) {
    const {regularUrl} = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <Image source={{uri: regularUrl}} style={styles.img}/>
        </View>
    );
}
detailImageScreen.navigationOptions = {
    title: 'Full Image'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img: {
        width: '100%',
        height: '100%',
    }
});