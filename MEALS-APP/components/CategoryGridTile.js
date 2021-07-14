import React from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

const CategoryGridTile = props => {
    return (
        <View style={styles.gridItem}  >
            <TouchableNativeFeedback
                style={{flex: 1}}
                onPress={props.onSelect}>
                <View style={{...styles.Container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
        
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height:150,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden'
    },
    Container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 19,
        textAlign: 'right'

    }
})

export default CategoryGridTile;