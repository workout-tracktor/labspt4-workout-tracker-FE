import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function TypeCard(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => { alert(props.text);}} style={styles.containerStyle}>
                <Image
                style={{width: 100, height: 100}}
                source={{uri: props.url}}
                />
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        
    },
    text: {
        fontSize: 40,
        paddingTop: 20,
        fontWeight: "700",
        fontFamily: 'SourceSansPro-Regular',
    }
});