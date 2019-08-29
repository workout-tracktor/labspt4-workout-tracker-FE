import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TypeCard from './TypeCard';
import data from './DummyData'


class Onboarding extends React.Component {
    //React Navigation comes with a default navbar, which can be styled 
    //with the static navigationOptions
    static navigationOptions =  ({navigation}) => ({
        title: 'Onboarding',
        //setting header as null removes the top navbar
        header: null
    })


    constructor(props){
        super(props)
    }


    generateCards() {
        return data.dummyData.map((elem, index) =>
            <TypeCard key={index} url={elem.url} text={elem.text} />
        )
    }

    onPressLearnMore(){
        console.log('hi')
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <Text> Goal: Select a body type</Text>
                {this.generateCards()}
                <View style = {styles.buttonsContainer}>
                    <Button
                     onPress={this.onPressLearnMore}
                     title = "Select Later"
                     color = "black"
                     style = {styles.button}
                    />
                    <Button
                     onPress={this.onPressLearnMore}
                     title = "SELECT"
                     color = "black"
                     style = {styles.button}
                    />
                    
                </View>

            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})

export default Onboarding;