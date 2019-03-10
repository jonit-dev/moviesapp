import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from "../components/common";

class Home extends Component {

    // state = {key:value};
    static navigationOptions = {
        title: 'Home',


    };

    render() {
        return (
            <View>
                <Text>Home awesome2</Text>
                <Button onPress={() => {
                    this.props.navigation.navigate('About')
                }}>About</Button>
            </View>
        );
    }
}

export default Home;
