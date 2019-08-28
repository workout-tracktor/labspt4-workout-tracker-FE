import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TypeCard from './TypeCard';
import data from './DummyData'


class Onboarding extends React.Component {
    static navigationOptions = {

        title: 'Choose your body type',
        headerRight: (<View />)
    }
    constructor(props){
        super(props)
    }


    generateCards() {
        console.log('hi')
        return data.dummyData.map((elem, index) =>
            <TypeCard key={index} url={elem.url} text={elem.text} />
        )
    }
    
    render() {
        return (
            <View >
                <Text>Goal: Select a body type</Text>
                {this.generateCards()}
                <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('BackendAPI')}
        />
            </View>
        )
    }

};

export default Onboarding;