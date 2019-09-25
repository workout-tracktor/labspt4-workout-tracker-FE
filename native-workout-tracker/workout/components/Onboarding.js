import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Button,
    Image,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
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
                <LinearGradient
                    colors={['#394366', '#161A29']}
                    style={{ flex: 1 }}
                    >
                    <View style = {styles.titleContainer}>
                        <Image
                            style = {styles.trophy}
                            source = {require('../assets/images/TrophyIcon.png')}
                        />
                        <Text style = {styles.title}> WHAT'S YOUR GOAL? </Text>
                    </View>
                    <View style = {styles.cards}>
                        {this.generateCards()}
                    </View>
                    <View style = {styles.buttonsContainer}>
                        <View style = {styles.buttons}>
                        <TouchableOpacity onPress={this.handlPress} style = {styles.laterButtonContainer}>
                            <Text style={styles.laterButton}>CHOOSE LATER</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlPress} style = {styles.selectButtonContainer}>
                            <Text style={styles.selectButton}>SELECT</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10%',
        paddingLeft: 20
    },
    trophy: {
        width: 20,
        height: 20
    },
    title: {
        fontSize: 24,
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
      laterButtonContainer: {
        width: 140,
        height: 36.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      laterButton: {
        fontWeight: "700",
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 18,
        color: 'white',
      },
      selectButtonContainer: {
        width: 114,
        height: 36.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#2367FF",
      },
      selectButton: {
        fontWeight: "700",
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 18,
        color: 'white',
      }
})

export default Onboarding;