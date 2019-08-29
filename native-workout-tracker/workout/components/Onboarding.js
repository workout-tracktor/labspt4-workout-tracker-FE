import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Button,
    Dimensions,
} from 'react-native';
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
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}> Goal: Select a body type</Text>
                </View>
                <View style = {styles.cards}>
                    {this.generateCards()}
                </View>
                <View style = {styles.buttonsContainer}>
                    <View style = {styles.buttons}>
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
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        justifyContent: "center",
        flex: 1
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        padding: 20
    },
    buttonsContainer: {
        flex: 1.2
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 25,
    },
    button: {
        alignSelf: 'center',
        width: 500
    }
})

export default Onboarding;