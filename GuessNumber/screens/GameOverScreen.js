import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return(
        <View style={styles.screen}>
            <Text style={{fontWeight: '700', fontSize: 22}}>Game is Over!!!</Text>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/success.png')} style={styles.image}/>
            </View>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    )
};


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;