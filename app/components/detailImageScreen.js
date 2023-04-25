import React from 'react';
import {Image, StyleSheet, View} from 'react-native';


export default function DetailImageScreen(props) {
console.log('isDetailimagescreen: ',props)
    const {regularUrl} = props.route.params.regularUrl;

    return (
        <View style={styles.container}>
            <Image source={{uri: regularUrl}} style={styles.img}/>
        </View>
    );
}
DetailImageScreen.navigationOptions = {
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