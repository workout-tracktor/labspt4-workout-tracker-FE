import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TypeCard from './TypeCard';

export default function Onboarding() {
    const dummyData = [
        {
            url: "https://miro.medium.com/fit/c/256/256/1*tw_oY8pg58ga1a7Hj-12FA.jpeg",
            text: "Type 1"
        },
        {
            url: "https://miro.medium.com/fit/c/256/256/1*tw_oY8pg58ga1a7Hj-12FA.jpeg",
            text: "Type 2"
        },
        {
            url: "https://miro.medium.com/fit/c/256/256/1*tw_oY8pg58ga1a7Hj-12FA.jpeg",
            text: "Type 3"
        }
    ];
    function generateCards() {
        console.log('hi')
        return dummyData.map((elem, index) =>
            <TypeCard key={index} url={elem.url} text={elem.text} />
        )
    }
    return (
        <View >
            <Text>Goal: Select a body type</Text>
            {generateCards()}
        </View>
    )
};
