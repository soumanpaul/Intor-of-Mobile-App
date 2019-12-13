import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";


const IntroThree = () => (
    <View style={styles.container}>
        <Text>IntroOne</Text>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IntroThree;