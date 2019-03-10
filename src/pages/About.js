import React, {Component} from 'react';
import {Text, View} from 'react-native';

class About extends Component {

    // state = {key:value};

    static navigationOptions = {
        title: 'About'
    };


    render() {
        return (
            <View>
                <Text>About us</Text>
            </View>
        );
    }
}

export default About;
