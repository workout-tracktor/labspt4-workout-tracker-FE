import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Button,
    TouchableOpacity,
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
        this.state = {
            fontLoaded: false
        }
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
                        <TouchableOpacity onPress={this.handlPress}>
                            <Text style={styles.button}>Select Later</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlPress}>
                            <Text style={styles.button}>Select</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#364064',
        justifyContent: "center",
        flex: 1,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        padding: 20,
        fontSize: 20,
        fontWeight: "700",
        fontFamily: 'SourceSansPro-Regular',
        color: 'white'
    },
    buttonsContainer: {
        flex: 1.2
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
        fontWeight: "700",
        fontFamily: 'SourceSansPro-Regular',
      },
})

export default Onboarding;